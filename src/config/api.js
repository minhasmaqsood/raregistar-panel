import {base} from './env';

export default {
    //Categories
    CREATE_CATEGORY: base + '/api/category/store',
    UPDATE_CATEGORY: base + '/api/category/update',
    DELETE_CATEGORY: base + '/api/category/delete',
    SINGLE_CATEGORY: base + '/api/category/single',
    ALL_CATEGORY: base + '/api/category/view',
    //Age
    CREATE_AGE: base + '/api/age/store',
    UPDATE_AGE: base + '/api/age/update',
    DELETE_AGE: base + '/api/age/delete',
    SINGLE_AGE: base + '/api/age/single',
    ALL_AGE: base + '/api/age/view',
    //Organization
    CREATE_ORGANIZATION: base + '/api/organization/store',
    UPDATE_ORGANIZATION: base + '/api/organization/update',
    DELETE_ORGANIZATION: base + '/api/organization/delete',
    SINGLE_ORGANIZATION: base + '/api/organization/single',
    ALL_ORGANIZATION: base + '/api/organization/view',
 //User
    CREATE_USER: base + '/api/user/store',
    UPDATE_USER: base + '/api/user/update',
    DELETE_USER: base + '/api/user/delete',
    SINGLE_USER: base + '/api/user/single',
    ALL_USER: base + '/api/user/view',
 //competition
    CREATE_COMPETITION: base + '/api/competition/store',
    UPDATE_COMPETITION: base + '/api/competition/update',
    DELETE_COMPETITION: base + '/api/competition/delete',
    SINGLE_COMPETITION: base + '/api/competition/single',
    ALL_COMPETITION: base + '/api/competition/view',
    // question
    CREATE_QUESTION: base + '/api/quiz/store',
    UPDATE_QUESTION: base + '/api/quiz/update',
    DELETE_QUESTION: base + '/api/question/delete',
    SINGLE_QUESTION: base + '/api/question/single',
    ALL_QUESTION: base + '/api/question/view',

    //advert
    CREATE_ADVERT: base + '/api/ad/store',
    UPDATE_ADVERT: base + '/api/ad/update',
    DELETE_ADVERT: base + '/api/ad/delete',
    SINGLE_ADVERT: base + '/api/ad/single',
    ALL_ADVERT: base + '/api/ad/view',

    //Authentication
    LOGIN_USER: base + '/api/user/login',
    UPDATE_ADMIN_PROFILE: base + '/api/admin/profile/update',
    //Users
    USER_STORE: base + '/api/admin/users/store',
    USER_UPDATE: base + '/api/admin/users/update',
    USER_EDIT: base + '/api/admin/users/edit',
    ALL_USERS: base + '/api/admin/users',
    //Notification
    ALL_NOTIFICATIONS: base + '/api/admin/notifications',
    NOTIFICATIONS_READ: base + '/api/admin/notifications-read',
    //Chat
    GET_PRIVATE_CHAT: base + '/api/admin/chats/private',
    GET_PUBLIC_CHAT: base + '/api/admin/chats/public',
    STORE_CHAT: base + '/api/admin/chats/store',
    DELETE_CHAT_MESSAGE: base + '/api/admin/chats/delete',
    STORE_CHAT_TRANSLATIONS: base + '/api/admin/chats/translation/store',
    UPDATE_CHAT_TRANSLATIONS: base + '/api/admin/chats/translation/update',
    //Signals
    VIP_SIGNAL_STORE: base + '/api/admin/vip-signals/store',
    VIP_SIGNAL_UPDATE: base + '/api/admin/vip-signals/update',
    VIP_SIGNAL_DELETE: base + '/api/admin/vip-signals/delete',
    VIP_SIGNAL_EDIT: base + '/api/admin/vip-signals/edit',
    VIP_SIGNALS: base + '/api/admin/vip-signals',
    //VIP REGISTRATION
    VIP_REGISTRATIONS: base + '/api/admin/vip-registration',
    VIP_REGISTRATIONS_UPDATE: base + '/api/admin/vip-registration/update',
    //Result
    RESULT_STORE: base + '/api/admin/results/store',
    RESULT_UPDATE: base + '/api/admin/results/update',
    RESULT_DELETE: base + '/api/admin/results/delete',
    RESULT_EDIT: base + '/api/admin/results/edit',
    RESULTS: base + '/api/admin/results',
    STORE_RESULT_TRANSLATIONS: base + '/api/admin/results/translation/store',
    UPDATE_RESULT_TRANSLATIONS: base + '/api/admin/results/translation/update',
    // STORE_CATEGORY: base + '/api/admin/categories/store',
    // EDIT_CATEGORY: base + '/api/admin/categories/edit',
    // UPDATE_CATEGORY: base + '/api/admin/categories/update',
    // DELETE_CATEGORY: base + '/api/admin/categories/delete',
    // ALL_CATEGORIES: base + '/api/admin/categories',
    // ALL_COUNTRIES: base + '/api/countries',
    // UPDATE_COUNTRY_CODE: base + '/api/admin/country/code/update',
    // STORE_CATEGORY_TRANSLATIONS: base + '/api/admin/categories/translation/store',
    // UPDATE_CATEGORY_TRANSLATIONS: base + '/api/admin/categories/translation/update',
    //Guides
    STORE_GUIDES: base + '/api/admin/guides/store',
    EDIT_GUIDES: base + '/api/admin/guides/edit',
    UPDATE_GUIDES: base + '/api/admin/guides/update',
    DELETE_GUIDES: base + '/api/admin/guides/delete',
    ALL_GUIDES: base + '/api/admin/guides',
    STORE_GUIDES_TRANSLATIONS: base + '/api/admin/guides/translation/store',
    UPDATE_GUIDES_TRANSLATIONS: base + '/api/admin/guides/translation/update',
    //Privacy Policy
    GET_PRIVACY_POLICY: base + '/api/admin/privacy-policy',
    UPDATE_PRIVACY_POLICY: base + '/api/admin/privacy-policy/update',
    STORE_PRIVACY_POLICY_TRANSLATIONS: base + '/api/admin/privacy-policy/translation/store',
    UPDATE_PRIVACY_POLICY_TRANSLATIONS: base + '/api/admin/privacy-policy/translation/update',
    //Terms & Conditions
    GET_TERMS_AND_CONDITIONS: base + '/api/admin/terms-conditions',
    UPDATE_TERMS_AND_CONDITIONS: base + '/api/admin/terms-conditions/update',
    STORE_TERMS_AND_CONDITIONS_TRANSLATIONS: base + '/api/admin/terms-conditions/translation/store',
    UPDATE_TERMS_AND_CONDITIONS_TRANSLATIONS: base + '/api/admin/terms-conditions/translation/update',
    //Security
    GET_SECURITY: base + '/api/admin/security',
    UPDATE_SECURITY: base + '/api/admin/security/update',
    STORE_SECURITY_TRANSLATIONS: base + '/api/admin/security/translation/store',
    UPDATE_SECURITY_TRANSLATIONS: base + '/api/admin/security/translation/update',
    // Email Templates
    GET_TEMPLATES: base + '/api/admin/mailing-templates',
    UPDATE_TEMPLATE: base + '/api/admin/mailing-templates/update',
    UPDATE_TEMPLATES_TRANSLATIONS: base + '/api/admin/mailing-templates/translation/update',
    GET_TEMPLATES_TRANSLATIONS: base + '/api/admin/mailing-templates/translation',

    //Contact Us
    CONTACT_US_ALL: base + '/api/admin/contact-us',
    CONTACT_US_SINGLE_VIEW: base + '/api/admin/contact-us/view',
    CONTACT_US_DELETE: base + '/api/admin/contact-us/delete',
    //FAQS
    STORE_FAQ: base + '/api/admin/faqs/store',
    EDIT_FAQ: base + '/api/admin/faqs/edit',
    UPDATE_FAQ: base + '/api/admin/faqs/update',
    DELETE_FAQ: base + '/api/admin/faqs/delete',
    ALL_FAQS: base + '/api/admin/faqs',
    STORE_FAQ_TRANSLATIONS: base + '/api/admin/faqs/translation/store',
    UPDATE_FAQ_TRANSLATIONS: base + '/api/admin/faqs/translation/update',
    //Partners
    STORE_PARTNERS: base + '/api/admin/partners/store',
    EDIT_PARTNERS: base + '/api/admin/partners/edit',
    UPDATE_PARTNERS: base + '/api/admin/partners/update',
    DELETE_PARTNERS: base + '/api/admin/partners/delete',
    ALL_PARTNERS: base + '/api/admin/partners',
    //Languages
    GET_ALL_LANGUAGES: base + '/api/languages',
    DELETE_TRANSLATION: base + '/api/admin/translation/delete',
    //Videos
    UPLOAD_HOME_VIDEO: `${base}/api/admin/home/video/upload-advanced`,
    GET_HOME_VIDEO: `${base}/api/admin/home/video`,
    UPLOAD_COURSE_VIDEO: `${base}/api/admin/course/video/upload-advanced`,
    GET_COURSE_VIDEOS: `${base}/api/admin/course/video`,
    DELETE_HOME_VIDEO: `${base}/api/admin/home/video/delete`,

    UPLOAD_HOME_VIDEO_TRANSLATION: `${base}/api/admin/home/video/translation/store`,
    UPLOAD_COURSE_VIDEO_TRANSLATION: `${base}/api/admin/course/video/translation/store`,
    DELETE_TRANSLATION_VIDEO: `${base}/api/admin/video/translation/delete`
}
