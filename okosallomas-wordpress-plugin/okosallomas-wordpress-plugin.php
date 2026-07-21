<?php
/**
 * Plugin Name: MAV Okosallomas
 * Description: LocalWP gyakorlashoz keszult shortcode az okosallomas HTML oldalak beagyazasahoz.
 * Version: 0.1.11
 * Author: Okosallomas projekt
 */

if (!defined('ABSPATH')) {
    exit;
}

final class Okosallomas_WordPress_Plugin
{
    private const VERSION = '0.1.11';

    public static function init(): void
    {
        add_action('wp_head', [self::class, 'print_favicon'], 1);
        add_action('wp_enqueue_scripts', [self::class, 'enqueue_assets']);
        add_action('template_redirect', [self::class, 'render_home_page'], 0);
        add_filter('body_class', [self::class, 'body_class']);
        add_shortcode('okosallomas', [self::class, 'render_shortcode']);
    }

    public static function print_favicon(): void
    {
        if (is_admin()) {
            return;
        }

        $favicon_url = plugin_dir_url(__FILE__) . 'assets/original/favicon.ico';

        echo '<link rel="icon" href="' . esc_url($favicon_url) . '" type="image/x-icon">' . "\n";
    }

    public static function body_class(array $classes): array
    {
        $post = get_post();

        if ($post && has_shortcode((string) $post->post_content, 'okosallomas')) {
            $classes[] = 'okosallomas-full-page';
        }

        return $classes;
    }

    public static function enqueue_assets(): void
    {
        if (is_admin()) {
            return;
        }

        $asset_url = plugin_dir_url(__FILE__) . 'assets/original/';

        wp_enqueue_style(
            'okosallomas-bootstrap',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
            [],
            '5.3.3'
        );

        wp_enqueue_style(
            'okosallomas-bootstrap-icons',
            'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
            [],
            '1.11.3'
        );

        wp_enqueue_style(
            'okosallomas-leaflet',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
            [],
            '1.9.4'
        );

        wp_enqueue_style(
            'okosallomas-main',
            $asset_url . 'style.css',
            ['okosallomas-bootstrap', 'okosallomas-bootstrap-icons', 'okosallomas-leaflet'],
            self::VERSION
        );

        wp_enqueue_script(
            'okosallomas-leaflet',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
            [],
            '1.9.4',
            true
        );

        wp_enqueue_script(
            'okosallomas-smart-config',
            $asset_url . 'station-smart-config.js',
            [],
            self::VERSION,
            true
        );

        wp_enqueue_script(
            'okosallomas-page-extras',
            $asset_url . 'station-page-extras.js',
            [],
            self::VERSION,
            true
        );

        wp_enqueue_script(
            'okosallomas-page-renderer',
            $asset_url . 'station-page-renderer.js',
            ['okosallomas-page-extras'],
            self::VERSION,
            true
        );

        wp_enqueue_script(
            'okosallomas-main',
            $asset_url . 'script.js',
            [
                'okosallomas-leaflet',
                'okosallomas-smart-config',
                'okosallomas-page-extras',
                'okosallomas-page-renderer',
            ],
            self::VERSION,
            true
        );
    }

    public static function render_home_page(): void
    {
        if (is_admin() || !(is_front_page() || is_home())) {
            return;
        }

        $page_path = plugin_dir_path(__FILE__) . 'assets/pages/index.html';
        if (!is_readable($page_path)) {
            return;
        }

        status_header(200);
        nocache_headers();

        $body = self::prepare_page_body($page_path);

        echo '<!DOCTYPE html><html lang="hu"><head>';
        echo '<meta charset="' . esc_attr(get_bloginfo('charset')) . '">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        echo '<title>Okos&aacute;llom&aacute;s</title>';
        wp_head();
        echo '</head><body class="home-page okosallomas-full-page okosallomas-wordpress-home">';

        if (function_exists('wp_body_open')) {
            wp_body_open();
        }

        echo $body;
        wp_footer();
        echo '</body></html>';
        exit;
    }

    public static function render_shortcode(array $atts): string
    {
        $atts = shortcode_atts(
            [
                'station' => 'kaposvar',
                'lang' => '',
            ],
            $atts,
            'okosallomas'
        );

        $station = sanitize_key((string) $atts['station']);
        $lang = self::resolve_lang((string) $atts['lang']);
        if ($station === '') {
            return self::message('Nincs megadva allomas.');
        }

        $page_path = self::page_path($station, $lang);

        if (!is_readable($page_path)) {
            $lang = 'hu';
            $page_path = self::page_path($station, $lang);
        }

        if (!is_readable($page_path)) {
            return self::message('Ehhez az allomashoz meg nincs betoltheto oldal.');
        }

        $body = self::prepare_page_body($page_path);

        $bootstrap = sprintf(
            '<script>document.documentElement.setAttribute("lang", %s); document.body.classList.add("okosallomas-full-page"); document.body.dataset.stationKey = %s; window.okosallomasAssetBase = %s;</script>',
            wp_json_encode($lang),
            wp_json_encode($station),
            wp_json_encode(plugin_dir_url(__FILE__) . 'assets/original/')
        );

        return sprintf(
            '<div class="okosallomas-wordpress-page" data-okosallomas-station="%s" data-okosallomas-lang="%s">%s%s</div>',
            esc_attr($station),
            esc_attr($lang),
            $bootstrap,
            $body
        );
    }

    private static function resolve_lang(string $lang): string
    {
        $query_lang = isset($_GET['okos_lang']) ? sanitize_key((string) wp_unslash($_GET['okos_lang'])) : '';
        $candidate = $query_lang !== '' ? $query_lang : sanitize_key($lang);

        return in_array($candidate, ['hu', 'en', 'de'], true) ? $candidate : 'hu';
    }

    private static function page_path(string $station, string $lang): string
    {
        $suffix = $lang === 'hu' ? '' : '-' . $lang;

        return plugin_dir_path(__FILE__) . 'assets/pages/' . $station . $suffix . '.html';
    }

    private static function prepare_page_body(string $page_path): string
    {
        $html = (string) file_get_contents($page_path);
        $body = self::extract_body($html);
        $body = self::strip_document_assets($body);
        $body = self::rewrite_asset_urls($body);
        $body = self::rewrite_page_links($body);
        $body = self::rewrite_language_switchers($body);

        return $body;
    }

    private static function extract_body(string $html): string
    {
        if (preg_match('/<body\b[^>]*>(.*?)<\/body>/is', $html, $matches)) {
            return $matches[1];
        }

        return $html;
    }

    private static function strip_document_assets(string $html): string
    {
        $html = preg_replace('/<script\b[^>]*>.*?<\/script>/is', '', $html);
        $html = preg_replace('/<link\b[^>]*>/is', '', (string) $html);

        return (string) $html;
    }

    private static function rewrite_asset_urls(string $html): string
    {
        $asset_base = plugin_dir_url(__FILE__) . 'assets/original/';

        return (string) preg_replace_callback(
            '/\b(src|href)=([\'"])(?!https?:|mailto:|tel:|#|data:)([^\'"]+)\2/i',
            static function (array $match) use ($asset_base): string {
                $attr = $match[1];
                $quote = $match[2];
                $url = trim($match[3]);

                if ($url === '' || preg_match('/\.html?($|\?)/i', $url)) {
                    return $match[0];
                }

                $path = ltrim($url, './');
                $path = (string) preg_replace('#^assets/(?:audio|img|maps)/#i', '', $path);

                return $attr . '=' . $quote . esc_url($asset_base . $path) . $quote;
            },
            $html
        );
    }

    private static function rewrite_page_links(string $html): string
    {
        return (string) preg_replace_callback(
            '/\bhref=([\'"])(?!https?:|\/\/|mailto:|tel:|#|data:)([^\'"]+\.html?(?:\?[^\'"]*)?)\1/i',
            static function (array $match): string {
                $quote = $match[1];
                $url = html_entity_decode(trim($match[2]));
                $path = (string) parse_url($url, PHP_URL_PATH);
                $file = basename($path);

                if (!preg_match('/^([a-z0-9-]+?)(?:-(en|de))?\.html?$/i', $file, $parts)) {
                    return $match[0];
                }

                $slug = sanitize_title($parts[1]);
                $lang = isset($parts[2]) ? sanitize_key($parts[2]) : '';
                $target = $slug === 'index' ? home_url('/') : home_url('/' . $slug . '/');

                if (in_array($lang, ['en', 'de'], true)) {
                    $target = add_query_arg('okos_lang', $lang, $target);
                }

                return 'href=' . $quote . esc_url($target) . $quote;
            },
            $html
        );
    }

    private static function rewrite_language_switchers(string $html): string
    {
        $html = preg_replace(
            '/window\.location\.href\s*=\s*[\'"][^\'"]+-en\.html[\'"]/i',
            'window.location.href=\'?okos_lang=en\'',
            $html
        );

        $html = preg_replace(
            '/window\.location\.href\s*=\s*[\'"][^\'"]+-de\.html[\'"]/i',
            'window.location.href=\'?okos_lang=de\'',
            (string) $html
        );

        $html = preg_replace(
            '/window\.location\.href\s*=\s*[\'"][^\'"]+\.html[\'"]/i',
            'window.location.href=\'?okos_lang=hu\'',
            (string) $html
        );

        return (string) $html;
    }

    private static function message(string $text): string
    {
        return '<div class="alert alert-warning okosallomas-message">' . esc_html($text) . '</div>';
    }
}

Okosallomas_WordPress_Plugin::init();
