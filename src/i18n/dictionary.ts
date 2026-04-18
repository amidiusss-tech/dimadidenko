import { Locale } from "@/i18n/config";

type HeaderCopy = {
  catalog: string;
  licensing: string;
  customScore: string;
  about: string;
};

type HomeCopy = {
  kicker: string;
  title: string;
  description: string;
  browseCatalog: string;
  viewLicenses: string;
  featured: string;
  seeAll: string;
};

type CatalogCopy = {
  title: string;
  subtitle: string;
  tagCloud: string;
};

type TrackCopy = {
  single: string;
  bpm: string;
  key: string;
  duration: string;
  moods: string;
  genres: string;
  useCases: string;
  licenseOptions: string;
  personal: string;
  commercial: string;
  extended: string;
  buy: string;
  secondsShort: string;
};

type CommonCopy = {
  fromPrice: string;
  openTrack: string;
  previewPlayer: string;
  audioUnsupported: string;
  previewTip: string;
  notFoundTitle: string;
  notFoundBody: string;
  backToCatalog: string;
};

type AboutCopy = {
  title: string;
  body: string;
};

type CustomScoreCopy = {
  title: string;
  body: string;
  cta: string;
};

type LicensingCopy = {
  title: string;
  subtitle: string;
  plans: Array<{ name: string; price: string; bullets: string[] }>;
};

export type Dictionary = {
  brand: string;
  localeLabel: string;
  header: HeaderCopy;
  home: HomeCopy;
  catalog: CatalogCopy;
  track: TrackCopy;
  common: CommonCopy;
  about: AboutCopy;
  customScore: CustomScoreCopy;
  licensing: LicensingCopy;
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    brand: "Music Store by Dima D.",
    localeLabel: "Language",
    header: {
      catalog: "Catalog",
      licensing: "Licensing",
      customScore: "Custom Score",
      about: "About"
    },
    home: {
      kicker: "Composer boutique library",
      title: "Music Store by Dima D.",
      description:
        "A new music catalog: original mini-albums with distinct moods and sonic palettes—for film, games, trailers, commercials, and digital content.",
      browseCatalog: "Browse catalog",
      viewLicenses: "View licenses",
      featured: "Featured tracks",
      seeAll: "See all"
    },
    catalog: {
      title: "Catalog",
      subtitle: "Find tracks by mood, style, and scene use-case.",
      tagCloud: "MVP tag cloud (static)"
    },
    track: {
      single: "Single",
      bpm: "BPM",
      key: "Key",
      duration: "Duration",
      moods: "Moods",
      genres: "Genres",
      useCases: "Use cases",
      licenseOptions: "License options",
      personal: "Personal",
      commercial: "Commercial",
      extended: "Extended",
      buy: "Buy license (Stripe next step)",
      secondsShort: "s"
    },
    common: {
      fromPrice: "from",
      openTrack: "Open track",
      previewPlayer: "Preview player",
      audioUnsupported: "Your browser does not support the audio element.",
      previewTip: "Tip: keep previews watermarked and lower bitrate than purchased files.",
      notFoundTitle: "Track not found",
      notFoundBody: "The requested item does not exist in the current catalog.",
      backToCatalog: "Back to catalog"
    },
    about: {
      title: "About Dima D.",
      body: "Film composer focused on emotional and cinematic storytelling through music. This store is a curated catalog of unreleased cues and mini albums available for licensing."
    },
    customScore: {
      title: "Custom Score",
      body: "Need original music for your film, ad, or branded story? Send a brief and I will compose a custom cue tailored to your timeline, mood, and narrative.",
      cta: "Send project brief"
    },
    licensing: {
      title: "Licensing",
      subtitle: "All music rights remain with Dima D. You purchase a usage license according to your project scope.",
      plans: [
        {
          name: "Personal / Creator",
          price: "from $29",
          bullets: ["For personal and small creator projects", "YouTube, Vimeo, social content", "No paid ads, no TV broadcast"]
        },
        {
          name: "Commercial",
          price: "from $79",
          bullets: ["For online business and brand usage", "Paid ads and commercial social media", "No national TV broadcast"]
        },
        {
          name: "Extended / Broadcast",
          price: "from $199",
          bullets: ["For broad campaigns and broadcast", "TV and large commercial distribution", "Resale of track itself is prohibited"]
        }
      ]
    }
  },
  ru: {
    brand: "Музыкальная лавка Димы Д.",
    localeLabel: "Язык",
    header: {
      catalog: "Каталог",
      licensing: "Лицензии",
      customScore: "Музыка на заказ",
      about: "О проекте"
    },
    home: {
      kicker: "Авторская библиотека кинокомпозитора",
      title: "Музыкальная лавка Димы Д.",
      description:
        "Авторский каталог новой музыки: мини-альбомы разных красок для фильмов, видеоигр, трейлеров, рекламы и контент-проектов.",
      browseCatalog: "Перейти в каталог",
      viewLicenses: "Посмотреть лицензии",
      featured: "Рекомендуемые треки",
      seeAll: "Смотреть все"
    },
    catalog: {
      title: "Каталог",
      subtitle: "Подбирайте треки по настроению, жанру и типу сцены.",
      tagCloud: "Облако тегов MVP (статичное)"
    },
    track: {
      single: "Сингл",
      bpm: "BPM",
      key: "Тональность",
      duration: "Длительность",
      moods: "Настроения",
      genres: "Жанры",
      useCases: "Сценарии использования",
      licenseOptions: "Варианты лицензии",
      personal: "Personal",
      commercial: "Commercial",
      extended: "Extended",
      buy: "Купить лицензию (следующий шаг: Stripe)",
      secondsShort: "с"
    },
    common: {
      fromPrice: "от",
      openTrack: "Открыть трек",
      previewPlayer: "Плеер превью",
      audioUnsupported: "Ваш браузер не поддерживает аудио-элемент.",
      previewTip: "Совет: в каталоге лучше использовать водяные знаки и пониженный битрейт превью.",
      notFoundTitle: "Трек не найден",
      notFoundBody: "Запрошенный трек отсутствует в текущем каталоге.",
      backToCatalog: "Вернуться в каталог"
    },
    about: {
      title: "О Диме Д.",
      body: "Кинокомпозитор, работающий с эмоциональным и кинематографичным звучанием. Этот сайт — кураторский каталог неизданных треков и мини-альбомов с лицензированием."
    },
    customScore: {
      title: "Музыка на заказ",
      body: "Нужна оригинальная музыка для фильма, рекламы или бренд-истории? Отправьте бриф, и я напишу трек под вашу драматургию, тайминг и настроение.",
      cta: "Отправить бриф"
    },
    licensing: {
      title: "Лицензии",
      subtitle: "Все авторские права на музыку остаются у Димы Д. Вы приобретаете лицензию на использование под задачи проекта.",
      plans: [
        {
          name: "Personal / Creator",
          price: "от $29",
          bullets: ["Для личных и небольших креаторских проектов", "YouTube, Vimeo, соцсети", "Без paid-рекламы и ТВ-вещания"]
        },
        {
          name: "Commercial",
          price: "от $79",
          bullets: ["Для коммерческих онлайн-проектов и брендов", "Допускаются paid-рекламные размещения", "Без национального ТВ-вещания"]
        },
        {
          name: "Extended / Broadcast",
          price: "от $199",
          bullets: ["Для широких кампаний и broadcast-использования", "ТВ и крупная коммерческая дистрибуция", "Перепродажа трека как самостоятельного продукта запрещена"]
        }
      ]
    }
  },
  ja: {
    brand: "Music Store by Dima D.",
    localeLabel: "言語",
    header: {
      catalog: "カタログ",
      licensing: "ライセンス",
      customScore: "オーダー作曲",
      about: "プロフィール"
    },
    home: {
      kicker: "映画音楽コンポーザーのライブラリ",
      title: "Music Store by Dima D.",
      description:
        "新しい音楽カタログ。作曲家によるオリジナルのミニアルバムを収録し、映画、ゲーム、予告編、CM、Webコンテンツなど、作品ごとに異なる世界観や雰囲気をお楽しみいただけます。",
      browseCatalog: "カタログを見る",
      viewLicenses: "ライセンスを見る",
      featured: "注目トラック",
      seeAll: "すべて表示"
    },
    catalog: {
      title: "カタログ",
      subtitle: "ムード、スタイル、シーン用途からトラックを探せます。",
      tagCloud: "MVPタグクラウド（静的）"
    },
    track: {
      single: "シングル",
      bpm: "BPM",
      key: "キー",
      duration: "長さ",
      moods: "ムード",
      genres: "ジャンル",
      useCases: "用途",
      licenseOptions: "ライセンスプラン",
      personal: "Personal",
      commercial: "Commercial",
      extended: "Extended",
      buy: "ライセンスを購入（次のステップ: Stripe）",
      secondsShort: "秒"
    },
    common: {
      fromPrice: "from",
      openTrack: "トラックを開く",
      previewPlayer: "プレビュープレイヤー",
      audioUnsupported: "お使いのブラウザは audio 要素をサポートしていません。",
      previewTip: "ヒント: プレビューは透かし入り・低ビットレートで公開するのがおすすめです。",
      notFoundTitle: "トラックが見つかりません",
      notFoundBody: "指定されたトラックは現在のカタログに存在しません。",
      backToCatalog: "カタログに戻る"
    },
    about: {
      title: "Dima D.について",
      body: "感情表現と映画的ストーリーテリングに特化した作曲家です。このストアでは未発表キューやミニアルバムをライセンス提供しています。"
    },
    customScore: {
      title: "オーダー作曲",
      body: "映画、広告、ブランドストーリー向けにオリジナル楽曲が必要ですか？ ブリーフを送っていただければ、尺と演出意図に合わせて作曲します。",
      cta: "ブリーフを送る"
    },
    licensing: {
      title: "ライセンス",
      subtitle: "楽曲の著作権は Dima D. に帰属します。利用目的に応じた使用ライセンスをご購入ください。",
      plans: [
        {
          name: "Personal / Creator",
          price: "from $29",
          bullets: ["個人利用や小規模クリエイター向け", "YouTube / Vimeo / SNSで利用可能", "有料広告とTV放送は不可"]
        },
        {
          name: "Commercial",
          price: "from $79",
          bullets: ["商用オンライン案件・ブランド利用向け", "有料広告・商用SNS配信に対応", "全国TV放送は不可"]
        },
        {
          name: "Extended / Broadcast",
          price: "from $199",
          bullets: ["大規模キャンペーン・放送利用向け", "TVおよび広域商用配信に対応", "楽曲そのものの再販は禁止"]
        }
      ]
    }
  },
  de: {
    brand: "Music Store by Dima D.",
    localeLabel: "Sprache",
    header: {
      catalog: "Katalog",
      licensing: "Lizenzen",
      customScore: "Auftragsmusik",
      about: "Über"
    },
    home: {
      kicker: "Boutique-Bibliothek eines Komponisten",
      title: "Music Store by Dima D.",
      description:
        "Ein neuer Musikkatalog: Original-Mini-Alben mit jeweils eigenem Charakter – für Film, Games, Trailer, Werbung und Online-Inhalte.",
      browseCatalog: "Katalog ansehen",
      viewLicenses: "Lizenzen ansehen",
      featured: "Empfohlene Tracks",
      seeAll: "Alle anzeigen"
    },
    catalog: {
      title: "Katalog",
      subtitle: "Finde Tracks nach Stimmung, Stil und Szenario.",
      tagCloud: "MVP-Tag-Cloud (statisch)"
    },
    track: {
      single: "Single",
      bpm: "BPM",
      key: "Tonart",
      duration: "Dauer",
      moods: "Stimmungen",
      genres: "Genres",
      useCases: "Einsatzbereiche",
      licenseOptions: "Lizenzoptionen",
      personal: "Personal",
      commercial: "Commercial",
      extended: "Extended",
      buy: "Lizenz kaufen (Stripe im nächsten Schritt)",
      secondsShort: "s"
    },
    common: {
      fromPrice: "ab",
      openTrack: "Track öffnen",
      previewPlayer: "Preview-Player",
      audioUnsupported: "Dein Browser unterstützt das Audio-Element nicht.",
      previewTip: "Tipp: Vorschauen mit Watermark und niedrigerer Bitrate veröffentlichen.",
      notFoundTitle: "Track nicht gefunden",
      notFoundBody: "Der angeforderte Track existiert im aktuellen Katalog nicht.",
      backToCatalog: "Zurück zum Katalog"
    },
    about: {
      title: "Über Dima D.",
      body: "Filmkomponist mit Fokus auf emotionales und cineastisches Storytelling durch Musik. Dieser Store ist ein kuratierter Katalog unveröffentlichter Cues und Mini-Alben."
    },
    customScore: {
      title: "Auftragsmusik",
      body: "Du brauchst Originalmusik für Film, Werbung oder Brand-Story? Sende ein Briefing und ich komponiere passgenau für dein Timing und deine Dramaturgie.",
      cta: "Briefing senden"
    },
    licensing: {
      title: "Lizenzen",
      subtitle: "Alle Urheberrechte verbleiben bei Dima D. Du kaufst eine Nutzungslizenz je nach Projektumfang.",
      plans: [
        { name: "Personal / Creator", price: "ab $29", bullets: ["Für persönliche und kleine Creator-Projekte", "YouTube, Vimeo, Social Content", "Keine Paid Ads, kein TV-Broadcast"] },
        { name: "Commercial", price: "ab $79", bullets: ["Für Online-Business und Markenprojekte", "Paid Ads und kommerzielle Social-Kampagnen", "Kein nationaler TV-Broadcast"] },
        { name: "Extended / Broadcast", price: "ab $199", bullets: ["Für große Kampagnen und Broadcast", "TV und breite kommerzielle Distribution", "Weiterverkauf des Tracks ist nicht erlaubt"] }
      ]
    }
  },
  zh: {
    brand: "Music Store by Dima D.",
    localeLabel: "语言",
    header: {
      catalog: "曲库",
      licensing: "授权",
      customScore: "定制作曲",
      about: "关于"
    },
    home: {
      kicker: "作曲家精品音乐库",
      title: "Music Store by Dima D.",
      description:
        "全新音乐目录：原创迷你专辑，各具气质与色彩，适用于电影、游戏、预告片、广告及数字内容。",
      browseCatalog: "浏览曲库",
      viewLicenses: "查看授权",
      featured: "精选曲目",
      seeAll: "查看全部"
    },
    catalog: {
      title: "曲库",
      subtitle: "按情绪、风格和使用场景查找音乐。",
      tagCloud: "MVP 标签云（静态）"
    },
    track: {
      single: "单曲",
      bpm: "BPM",
      key: "调式",
      duration: "时长",
      moods: "情绪",
      genres: "风格",
      useCases: "使用场景",
      licenseOptions: "授权方案",
      personal: "Personal",
      commercial: "Commercial",
      extended: "Extended",
      buy: "购买授权（下一步 Stripe）",
      secondsShort: "秒"
    },
    common: {
      fromPrice: "起",
      openTrack: "打开曲目",
      previewPlayer: "试听播放器",
      audioUnsupported: "你的浏览器不支持音频元素。",
      previewTip: "建议预览版加水印并使用较低码率。",
      notFoundTitle: "未找到曲目",
      notFoundBody: "当前曲库中不存在该曲目。",
      backToCatalog: "返回曲库"
    },
    about: {
      title: "关于 Dima D.",
      body: "电影作曲人，专注于情感与电影叙事音乐。本网站提供未发布作品与迷你专辑的授权使用。"
    },
    customScore: {
      title: "定制作曲",
      body: "需要为电影、广告或品牌故事创作原创音乐？发送需求简报，我会按你的节奏与情绪定制作品。",
      cta: "发送简报"
    },
    licensing: {
      title: "授权",
      subtitle: "音乐版权始终归 Dima D. 所有。你购买的是按项目范围授权的使用许可。",
      plans: [
        { name: "Personal / Creator", price: "from $29", bullets: ["适用于个人与小型创作者项目", "可用于 YouTube / Vimeo / 社媒", "不包含付费广告与电视播出"] },
        { name: "Commercial", price: "from $79", bullets: ["适用于商业线上项目与品牌内容", "支持付费广告与商业社媒投放", "不含全国电视播出"] },
        { name: "Extended / Broadcast", price: "from $199", bullets: ["适用于大型活动与广播场景", "支持电视与大范围商业传播", "禁止将音乐作为独立产品转售"] }
      ]
    }
  },
  es: {
    brand: "Music Store by Dima D.",
    localeLabel: "Idioma",
    header: { catalog: "Catálogo", licensing: "Licencias", customScore: "Música a medida", about: "Acerca de" },
    home: {
      kicker: "Biblioteca boutique de compositor",
      title: "Music Store by Dima D.",
      description:
        "Catálogo de música en mini álbumes originales, cada uno con su propia identidad sonora: cine, videojuegos, trailers, publicidad y contenido digital.",
      browseCatalog: "Ver catálogo",
      viewLicenses: "Ver licencias",
      featured: "Pistas destacadas",
      seeAll: "Ver todo"
    },
    catalog: { title: "Catálogo", subtitle: "Encuentra pistas por mood, estilo y uso.", tagCloud: "Nube de etiquetas MVP (estática)" },
    track: {
      single: "Single",
      bpm: "BPM",
      key: "Tonalidad",
      duration: "Duración",
      moods: "Ambientes",
      genres: "Géneros",
      useCases: "Casos de uso",
      licenseOptions: "Opciones de licencia",
      personal: "Personal",
      commercial: "Commercial",
      extended: "Extended",
      buy: "Comprar licencia (siguiente paso Stripe)",
      secondsShort: "s"
    },
    common: {
      fromPrice: "desde",
      openTrack: "Abrir pista",
      previewPlayer: "Reproductor de preview",
      audioUnsupported: "Tu navegador no soporta el elemento de audio.",
      previewTip: "Consejo: usa previews con marca de agua y menor bitrate.",
      notFoundTitle: "Pista no encontrada",
      notFoundBody: "La pista solicitada no existe en el catálogo actual.",
      backToCatalog: "Volver al catálogo"
    },
    about: { title: "Sobre Dima D.", body: "Compositor de cine enfocado en narrativa emocional y cinematográfica a través de la música." },
    customScore: { title: "Música a medida", body: "¿Necesitas música original para tu película, anuncio o marca? Envíame un brief y compongo para tu proyecto.", cta: "Enviar brief" },
    licensing: {
      title: "Licencias",
      subtitle: "Todos los derechos permanecen con Dima D. Compras una licencia de uso según el alcance de tu proyecto.",
      plans: [
        { name: "Personal / Creator", price: "desde $29", bullets: ["Para proyectos personales y pequeños creadores", "YouTube, Vimeo, redes sociales", "Sin anuncios pagados ni TV"] },
        { name: "Commercial", price: "desde $79", bullets: ["Para uso comercial online y marcas", "Incluye anuncios pagados y redes comerciales", "Sin TV nacional"] },
        { name: "Extended / Broadcast", price: "desde $199", bullets: ["Para campañas amplias y broadcast", "TV y distribución comercial amplia", "Prohibida la reventa de la música"] }
      ]
    }
  },
  fr: {
    brand: "Music Store by Dima D.",
    localeLabel: "Langue",
    header: { catalog: "Catalogue", licensing: "Licences", customScore: "Composition sur mesure", about: "À propos" },
    home: {
      kicker: "Bibliothèque boutique de compositeur",
      title: "Music Store by Dima D.",
      description:
        "Un nouveau catalogue de musique d'auteur : des mini-albums originaux, chacun avec sa propre identité sonore — pour le cinéma, les jeux vidéo, les bandes-annonces, la publicité et les contenus numériques.",
      browseCatalog: "Voir le catalogue",
      viewLicenses: "Voir les licences",
      featured: "Titres en vedette",
      seeAll: "Tout voir"
    },
    catalog: { title: "Catalogue", subtitle: "Trouvez des titres par ambiance, style et usage.", tagCloud: "Nuage de tags MVP (statique)" },
    track: {
      single: "Single",
      bpm: "BPM",
      key: "Tonalité",
      duration: "Durée",
      moods: "Ambiances",
      genres: "Genres",
      useCases: "Cas d'usage",
      licenseOptions: "Options de licence",
      personal: "Personal",
      commercial: "Commercial",
      extended: "Extended",
      buy: "Acheter la licence (étape suivante: Stripe)",
      secondsShort: "s"
    },
    common: {
      fromPrice: "à partir de",
      openTrack: "Ouvrir le titre",
      previewPlayer: "Lecteur preview",
      audioUnsupported: "Votre navigateur ne prend pas en charge l'élément audio.",
      previewTip: "Astuce: utilisez des previews watermarkées et un bitrate réduit.",
      notFoundTitle: "Titre introuvable",
      notFoundBody: "Le titre demandé n'existe pas dans le catalogue actuel.",
      backToCatalog: "Retour au catalogue"
    },
    about: { title: "À propos de Dima D.", body: "Compositeur de musique de film axé sur le storytelling émotionnel et cinématographique." },
    customScore: { title: "Composition sur mesure", body: "Besoin d'une musique originale pour un film, une pub ou une marque ? Envoyez un brief et je compose pour votre projet.", cta: "Envoyer un brief" },
    licensing: {
      title: "Licences",
      subtitle: "Tous les droits restent à Dima D. Vous achetez une licence d'utilisation selon l'ampleur de votre projet.",
      plans: [
        { name: "Personal / Creator", price: "à partir de $29", bullets: ["Pour projets personnels et petits créateurs", "YouTube, Vimeo, réseaux sociaux", "Pas de pub payante ni TV"] },
        { name: "Commercial", price: "à partir de $79", bullets: ["Pour usage commercial en ligne et marques", "Publicités payantes et social commercial", "Pas de diffusion TV nationale"] },
        { name: "Extended / Broadcast", price: "à partir de $199", bullets: ["Pour campagnes larges et diffusion", "TV et distribution commerciale étendue", "Revente du titre interdite"] }
      ]
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale];
}
