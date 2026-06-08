window.stationSmartConfigs = {
  kaposvar: {
    key: "kaposvar",
    cityName: {
      hu: "Kaposvár",
      en: "Kaposvár"
    },
    stationName: {
      hu: "Kaposvár vasútállomás",
      en: "Kaposvár railway station"
    },
    station: {
      lat: 46.3529,
      lon: 17.7948
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Kaposvár"],
      university: ["egyetem Kaposvár"]
    },
    manualPlaces: {
      entertainment: {
        bath: [
          {
            name: "Virágfürdő Kaposvár",
            lat: 46.351111,
            lon: 17.7975
          }
        ]
      }
    },
    forbiddenNames: ["Kamaraszínház", "Rendezvénytér"],
    specialLinks: [
      {
        matches: ["kultik"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális moziműsort:",
          en: "Click the image to view the current movie schedule:"
        },
        url: "https://kaposvarimozi.hu/",
        image: "kultik_logo.png",
        alt: "Kultik Mozi"
      },
      {
        matches: ["csiky gerge"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális színházműsort:",
          en: "Click the image to view the current theater program:"
        },
        url: "https://www.csiky.hu/musor/",
        image: "csikygergelyszinhaz_logo.png",
        alt: "Csiky Gergely Színház"
      },
      {
        matches: ["roxínház", "roxinhaz"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális műsort és jegyeket:",
          en: "Click the image to view the current program and tickets:"
        },
        url: "https://roxinhaz.hu/jegyek-musor/",
        image: "roxinhaz_logo.png",
        alt: "Roxínház"
      }
    ]
  },

  pecs: {
    key: "pecs",
    cityName: {
      hu: "Pécs",
      en: "Pécs"
    },
    stationName: {
      hu: "Pécs vasútállomás",
      en: "Pécs railway station"
    },
    station: {
      lat: 46.06637,
      lon: 18.22201
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Pécs"],
      university: ["egyetem Pécs"]
    },
    manualPlaces: {
      entertainment: {
        bath: [
          {
            name: "Hullámfürdő Pécs",
            lat: 46.0732,
            lon: 18.2269
          }
        ]
      }
    },
    forbiddenNames: [],
    specialLinks: [
      {
        matches: ["cinema city"],
        text: {
          hu: "Az aktuális moziműsort itt tudod megnézni:",
          en: "You can view the current movie schedule here:"
        },
        url: "https://www.cinemacity.hu/",
        label: {
          hu: "Cinema City műsor",
          en: "Cinema City schedule"
        }
      },
      {
        matches: ["pécsi nemzeti", "nemzeti színház"],
        text: {
          hu: "Az aktuális színházműsort itt tudod megnézni:",
          en: "You can view the current theater program here:"
        },
        url: "https://www.pnsz.hu/",
        label: {
          hu: "Pécsi Nemzeti Színház",
          en: "Pécs National Theatre"
        }
      }
    ]
  }
};
