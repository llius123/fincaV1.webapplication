import { Injectable, ErrorHandler } from "@angular/core";

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://4ba1d4ef58844db29c9d747f6ea9aa01@sentry.io/1376814"
});

@Injectable()
export class SentryErrorHandle implements ErrorHandler {
    constructor() { }
    handleError(error) {
        Sentry.captureException(error.originalError || error);
        throw error;
    }
}