import { DEV_BACKEND_URL, PROD_BACKEND_URL } from '@env';

const devEnvirnmentVariables = {
    DEV_BACKEND_URL
}

const prodEnvirnmentVariables = {
    PROD_BACKEND_URL
}

export default __DEV__ ? devEnvirnmentVariables : prodEnvirnmentVariables;