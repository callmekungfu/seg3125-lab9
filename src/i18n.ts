import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          search: 'Search',
          search_placeholder: 'Search through our large catelog here...',
          no_product_available: 'No Products Available',
          available_in: 'Available in ',
          day: 'day',
          item_added_to_cart: 'Item Added to Cart',
          item_is_in_cart: 'Item is in cart',
          add_to_rental_request: 'Add to Rental Request',
          per_day: 'Per Day',
          show_all_products: 'Show All Products',
          photography: 'Photography',
          dslr_camera: 'DSLR Camera',
          camera_lens: 'Camera Lens',
          videography: 'Videography',
          camcorder: 'Camcorder',
          audio: 'Audio',
          lighting: 'Lighting',
          support: 'Support',
          microphone: 'Microphone',
          studio_flash: 'Studio Flash',
          battery_flash: 'Battery Flash',
          tripod: 'Tripod',
          rental_prompt: `Your Request will be recieved by our Rental department staff who will
          contact you by phone to confirm your rental. Our Rental team will be
          able to answer questions regarding the equipment you are renting as well
          as recommend compatible equipment choices.`,
          rental_request_form: 'Rental Request Form',
          shopping_cart: 'Shopping Cart',
          first_name: 'First Name',
          first_name_error: 'Please provide your first name',
          last_name: 'Last Name',
          last_name_error: 'Please provide your last name',
          email_address: 'Email Address',
          phone_number: 'Phone Number',
          location: 'Location',
          rental_date: 'Rental Date',
          special_request: 'Special request',
          special_request_placeholder:
            'Anything you would like to include on your request (pick up time, additional accessories etc.)',
          submit: 'Submit',
          rental_store: 'Rental Store',
          your_order: 'Your Order',
          signature: 'Crafted by Yong Lin Wang.',
          contact_us_prompt: 'Got a question? Contact us now!',
        },
      },
      fr: {
        translations: {
          search: 'Recherche',
          search_placeholder: 'Cherchez dans notre grand cataloque ici...',
          no_product_available: 'Aucun produit disponible',
          available_in: 'Disponible en ',
          day: 'jour',
          item_added_to_cart: 'Article ajouté au panier',
          item_is_in_cart: "L'article est dans le panier",
          add_to_rental_request: 'Ajouter à la demande de location',
          per_day: 'Par jour',
          show_all_products: 'Afficher tous les produits',
          photography: 'Photographie',
          dslr_camera: 'Appareil photo DSLR',
          camera_lens: "Objectif de l'appareil photo",
          videography: 'Vidéographie',
          camcorder: 'Caméscope',
          audio: 'Audio',
          lighting: 'Éclairage',
          support: 'Support',
          microphone: 'Microphone',
          studio_flash: 'Studio Flash',
          battery_flash: 'Battery Flash',
          tripod: 'Tripod',
          rental_prompt: `Votre demande sera reçue par le personnel de notre service de location qui
          vous contacter par téléphone pour confirmer votre location. Notre équipe de location sera
          capable de répondre également aux questions concernant l'équipement que vous louez
          comme recommandent les choix d'équipements compatibles`,
          rental_request_form: 'Formulaire de demande de location',
          shopping_cart: "Panier d'achat",
          first_name: 'Prénom',
          first_name_error: 'Veuillez indiquer votre prénom',
          last_name: 'Nom de famille',
          last_name_error: 'Veuillez indiquer votre nom de famille',
          email_address: 'Adresse de courrier électronique',
          phone_number: 'Numéro de téléphone',
          location: 'Lieu',
          rental_date: 'Date de location',
          special_request: 'Demande spéciale',
          special_request_placeholder:
            'Tout ce que vous souhaitez inclure dans votre demande (heure de ramassage, accessoires supplémentaires, etc.)',
          submit: 'Soumettre',
          rental_store: 'Magasin de location',
          your_order: 'Votre commande',
          signature: 'Réalisé par Yong Lin Wang',
          contact_us_prompt:
            'Vous avez une question ? Contactez-nous dès maintenant !',
        },
      },
      cn: {
        translations: {
          search: '搜索',
          search_placeholder: '用我们的搜索引擎快速的寻找你想要的产品...',
          no_product_available: '抱歉，没有符合你的要求的产品',
          available_in: '以下分店有货：',
          day: '日',
          item_added_to_cart: '产品以放入购物车',
          item_is_in_cart: '产品已经再购物车里了',
          add_to_rental_request: '加入购物车',
          per_day: '每日',
          show_all_products: '所有产品',
          photography: '摄影',
          dslr_camera: 'DSLR 相机',
          camera_lens: '相机镜头',
          videography: '视频拍摄',
          camcorder: '视频相机',
          audio: '音频',
          lighting: '光影',
          support: '其他产品',
          microphone: '麦克风',
          studio_flash: '大闪光灯',
          battery_flash: '相机闪光灯',
          tripod: '三脚架',
          rental_prompt: `我们的租赁部门工作人员将收到您的请求，他们将通过电话与您联系，确认您的租赁事宜。我们的租赁团队将能够回答有关您所租赁的设备的问题，并推荐兼容的设备选择。`,
          rental_request_form: '租赁请求单',
          shopping_cart: '购物车',
          first_name: '名',
          first_name_error: '请提供你的名字',
          last_name: '姓',
          last_name_error: '请提供你的姓',
          email_address: '电子邮箱',
          phone_number: '手机号',
          location: '租赁地址',
          rental_date: '租赁日期',
          special_request: '其他要求',
          special_request_placeholder: '任何其他需要的东西',
          submit: '提交',
          rental_store: '商城',
          your_order: '你的订单',
          signature: '王永林 · 制',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
