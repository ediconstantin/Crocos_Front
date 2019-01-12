import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('341286120979-e7a9bcsub87t5vjo3438pbjgumvudlpb.apps.googleusercontent.com')
    }]);

    return config;
}
