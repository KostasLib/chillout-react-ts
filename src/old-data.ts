export declare interface ITypelessRadioObject {
  id: string;
  name: string;
  source: string;
  img: string;
}

export declare interface IRadioData {
  music: ITypelessRadioObject[];
  news: ITypelessRadioObject[];
}

export const radios: IRadioData = {
  music: [
    {
      id: 'offradio',
      name: 'Off Radio',
      source: 'http://46.28.53.118:7062/stream?1529011397134',
      img: 'http://www.offradio.gr/sites/all/themes/offradio_theme/facebook.png',
    },
    {
      id: 'enlefko',
      name: 'En Lefko 87.7',
      source: 'http://stream.radiojar.com/enlefko877',
      img:
        'https://yt3.ggpht.com/a-/ACSszfFdWJg69QynFK0oJ0lxAjj9Rfg9wLO-aXM4nA=s900-mo-c-c0xffffffff-rj-k-no',
    },
    {
      id: 'best',
      name: 'Best Radio 92.6',
      source: 'http://best.live24.gr/best1222',
      img: 'http://cdn.e-radio.gr/logos/gr/big/bestradio.png',
    },
    {
      id: 'imagine',
      name: 'Imagine 89.7',
      source: 'http://37.59.32.115:6224/stream',
      img: 'https://www.imagine897.gr/images/folder/logos/mobile-logos/logomobile.png',
    },
    {
      id: 'pepper',
      name: 'Pepper 96.6',
      source: 'http://pepper966.live24.gr/pepperorigin',
      img: 'http://cdn.e-radio.gr/logos/gr/big/pepper966.png',
    },
    {
      id: 'fly',
      name: 'Fly 104',
      source: 'http://37.59.32.115:6168/stream',
      img: 'http://cdn.e-radio.gr/logos/gr/big/fly104.png',
    },
    {
      id: 'free',
      name: 'Free Radio 98.1',
      source: 'http://213.239.206.179:8090/stream',
      img: 'https://cdn-radiotime-logos.tunein.com/s80043d.png',
    },
    {
      id: 'dice',
      name: 'Dice Radio',
      source: 'http://fire.wavestreamer.com:4868/;stream/1',
      img: 'https://www.psybient.org/love/wp-content/uploads/dice-radio.jpg',
    },
    {
      id: 'vanillasmooth',
      name: 'Vanilla Radio Smooth',
      source:
        'http://ample-02.radiojar.com/w0b4xf0q52mtv?rj-ttl=5&rj-token=AAABZXvzn9F7OjTfj7qVsbdym7eCh5xftBkZEFSDg4PEu5_9W-hcfw',
      img:
        'https://www.radiojar.com/content/stations/ag1zfnJhZGlvamFyY29tci0LEgpBdXRoQ2xpZW50GMSRDwwLEg5TdGF0aW9uUHJvZmlsZRiAgICc6p7WCAyiAQNkZXY/image/?resize=210x210',
    },
    {
      id: 'vanilladeep',
      name: 'Vanilla Radio Deep',
      source:
        'http://ample-09.radiojar.com/egqwgc0q52mtv?1533575770=&rj-token=AAABZXv5eTXUXvOb1orC-T19NaujqbZ8rERm5LXsXN-dkrDg8OMegg&rj-ttl=5',
      img:
        'https://www.radiojar.com/content/stations/ag1zfnJhZGlvamFyY29tci0LEgpBdXRoQ2xpZW50GMSRDwwLEg5TdGF0aW9uUHJvZmlsZRiAgIDchPSQCgyiAQNkZXY/image/?resize=210x210',
    },
    {
      id: 'ertkosmos',
      name: 'Ert Kosmos 93.6',
      source: 'http://radiostreaming.ert.gr/ert-kosmos',
      img: 'https://www.radiofono.gr/sites/www.radiofono.gr/files/Kosmos936.jpg',
    },
    {
      id: 'kiss',
      name: 'Kiss FM 92.9',
      source: 'http://kissfm.live24.gr/kissfmathens',
      img: 'http://live24.gr/resrc/styles/custom-popups/kissfm/images_v2/logo.jpg',
    },
    {
      id: 'nostos',
      name: 'Nostos 100.6',
      source: 'http://144.76.92.208:7878/;',
      img:
        'http://resources.live24.gr/resources/images/stations/43d052f9-62c3-4f26-8d41-ba96a60566bb.png',
    },
    {
      id: 'galaxy',
      name: 'Galaxy 92',
      source: 'http://galaxy.live24.gr/galaxy9292',
      img: 'http://live24.gr/resrc/styles/custom-popups/galaxy/images/galaxy.jpg',
    },
    {
      id: 'athensvoice',
      name: 'Athens Voice Radio 102.5',
      source: 'http://nitro.live24.gr/nitro4555',
      img:
        'http://resources.live24.gr/resources/images/stations/611cb7f6-dd39-4e32-8204-0c6df17a6105.png',
    },
    {
      id: 'red',
      name: 'Red FM 96.3',
      source: 'http://206.190.150.92:8295/stream',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtp0Wt54siTNoS0PCK_ImONfHOPMMQ8OJglWAEsMSz1C1NgDb',
    },
    {
      id: 'hit',
      name: 'Hit FM 88.9',
      source: 'http://stream.radiojar.com/hit889',
      img:
        'https://hit889.gr/wp-content/uploads/2016/12/HIT-new-logo-transparency-300x300.png',
    },
    {
      id: 'music',
      name: 'Music 89.2',
      source: 'http://ample-02.radiojar.com/k0hua7u1yk5tv?',
      img:
        'http://www.music892.gr/wp-content/uploads/2017/09/cropped-MASTER_MUSIC_LOGO-2.png',
    },
    {
      id: 'mad',
      name: 'Mad Radio 106.2',
      source: 'http://mediaserver.mad.tv/stream',
      img: 'https://mytuner.global.ssl.fastly.net/media/tvos_radios/Sz2VMq3e9T.png',
    },
    {
      id: 'atlantis',
      name: 'Atlantis 105.2',
      source: 'http://144.76.140.103:8308/;*.mp3',
      img: 'http://cdn.e-radio.gr/logos/gr/big/atlantisradio.png',
    },
    {
      id: 'easy',
      name: 'Easy 97.2',
      source: 'https://stream.radiojar.com/cthtwxk5yvduv.mp3',
      img: 'https://www.easy972.gr/Assets/Imgs/easy972_200px.png',
    },
    {
      id: 'athensdj',
      name: 'Athens DJ 95.2',
      source: 'http://netradio.live24.gr/athensdeejay',
      img: 'http://www.athensdeejay.gr/Content/assets/logos-icons/station-logo-beta.svg',
    },
    {
      id: 'love',
      name: 'Love Radio 97.5',
      source: 'http://loveradio.live24.gr/loveradio-1000',
      img: 'http://live24.gr/resrc/styles/custom-popups/loveradio/logo.jpg',
    },
    {
      id: 'melodia',
      name: 'Melodia 99.2',
      source: 'http://netradio.live24.gr/melodia',
      img: 'http://cdn.e-radio.gr/logos/gr/big/melodia.png',
    },
    {
      id: 'vanillagreek',
      name: 'Vanilla Radio Greek',
      source:
        'http://ample-06.radiojar.com/exdncp89fnwtv?1533575713=&rj-token=AAABZXv6lo2xHtn8M5m1rLJDRdVG0z6g8-mDLqIVB1qCjDGiM-s52w&rj-ttl=5',
      img:
        'https://www.radiojar.com/content/stations/ag1zfnJhZGlvamFyY29tci0LEgpBdXRoQ2xpZW50GMSRDwwLEg5TdGF0aW9uUHJvZmlsZRiAgID-7ISICgyiAQNkZXY/image/?resize=210x210',
    },
    {
      id: 'ert2',
      name: 'ERT Deftero 103.7',
      source: 'http://radiostreaming.ert.gr/ert-deftero',
      img: 'http://cdn.e-radio.gr/logos/gr/big/ert-deftero.png',
    },
    {
      id: 'lampsi',
      name: 'Lampsi 92.3',
      source: 'blob:http://live24.gr/cb91406f-f368-4bda-9ba3-beb5532cc820',
      img: 'https://mytuner.global.ssl.fastly.net/media/tvos_radios/5xptb7c6dyvv.png',
    },
    {
      id: 'dromos',
      name: 'Dromos 89.8',
      source: 'http://dromos898.live24.gr/dromos898',
      img: 'http://cdn.e-radio.gr/logos/gr/big/dromosfm.png',
    },
  ],
  news: [
    {
      id: 'stokokkino',
      name: 'Sto Kokkino 105.5',
      source: 'http://stream.radiojar.com/kokkino-ath.mp3',
      img: 'http://cdn.e-radio.gr/logos/gr/big/kokkino.png',
    },
    {
      id: 'parapolitika',
      name: 'Parapolitika 90.1',
      source: 'http://netradio.live24.gr/athinaradio',
      img: 'http://cdn.e-radio.gr/logos/gr/big/parapolitikafm.png',
    },
    {
      id: 'sport24',
      name: 'Sport24 Radio 103.3',
      source: 'http://sport24radio.live24.gr/sport24radio',
      img:
        'http://www.sport24radio.gr/wp-content/uploads/2015/01/10540640_322923501242773_1133188200173876157_n.jpg',
    },
    {
      id: 'sportfm',
      name: 'Sport FM 94.6',
      source: 'http://sportfm.live24.gr/sportfm7712',
      img: 'http://cdn.e-radio.gr/logos/gr/big/sportfm946.png',
    },
    {
      id: 'real',
      name: 'Real FM 97.8',
      source: 'http://realfm.live24.gr/realfm',
      img:
        'http://dsi0l228kf79a.cloudfront.net/sites/default/files/radio/logos/logo-real-fm.png',
    },
    {
      id: 'thema',
      name: 'Thema Radio 104.6',
      source: 'http://stream.radiojar.com/cdk030dsvv5tv',
      img: 'http://cdn.e-radio.gr/logos/gr/big/themaradio.png',
    },
    {
      id: 'alpha',
      name: 'Alpha 98.9',
      source: 'http://listen.shoutcast.com/alpha989',
      img: 'http://cdn.e-radio.gr/logos/gr/big/alpha989.png',
    },
    {
      id: 'skai',
      name: 'Skai 100.3',
      source: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8',
      img: 'http://cdn.e-radio.gr/logos/gr/big/skai.png',
    },
    {
      id: 'testing-radio',
      name: 'Testing Radio',
      source: 'BROKEN',
      img:
        'https://www.creativefabrica.com/wp-content/uploads/2018/02/Testing-programming-icon-by-back1design1-580x580.jpg',
    },
  ],
};
