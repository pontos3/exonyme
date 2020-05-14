import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = (props) => {

    const { t } = useTranslation();
    return ( 
        <div>
            <h1>{t('contact.title')}</h1>
            <div>{t('contact.mail')}: test@test.com </div>
        </div>
    )
}

export default Contact;