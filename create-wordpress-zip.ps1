$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$pluginDir = Join-Path $repoRoot "okosallomas-wordpress-plugin"
$outputDir = Join-Path (Split-Path -Parent $repoRoot) "okosallomas-helyi-zip-mentes"
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$zipPath = Join-Path $outputDir "okosallomas-wordpress-plugin-fixed-$timestamp.zip"

if (-not (Test-Path -LiteralPath $pluginDir)) {
    throw "Nem talalom a WordPress plugin mappat: $pluginDir"
}

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

if (Test-Path -LiteralPath $zipPath) {
    Remove-Item -LiteralPath $zipPath -Force
}

Compress-Archive -LiteralPath $pluginDir -DestinationPath $zipPath -Force

Write-Host "Elkeszult a WordPress plugin ZIP:"
Write-Host $zipPath
