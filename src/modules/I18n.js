import en from '../traductions/en.js'

let instance = null

export const I18n = (locale = 'en') => {
    if (instance) return instance

    instance = {}
    instance.locale = locale
    instance.messages = en()
    instance.t = (key, defaultVal) => {
        if (!defaultVal) defaultVal = key
        if (!key.split) return defaultVal
        let message = instance.messages
        for (const k of key.split('.')) {
            if (!message[k]) return defaultVal
            message = message[k]
        }
        return message
    }
    instance.k = (key) => {
        let message = instance.messages
        for (const k of key.split('.')) {
            if (!message[k]) return false
            message = message[k]
        }
        return true
    }

    return instance
}