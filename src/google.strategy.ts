import {PassportStrategy} from "@nestjs/passport";

import {Strategy, VerifyCallback} from 'passport-google-oauth20';

import { Injectable } from "@nestjs/common";

@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: '8339710024-tq1rq56oo1b0kobhqsgq1494ka9gdnvr.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:5000/auth/google/callback',
            scope: ['email', 'profile']
        });
    }
    async validate(acessToken: string, refreshToken: string, profile: any, done: 
        VerifyCallback): Promise<any>{
            const{name, emails} = profile
            const user={
                email: emails[0].value,
                firstName: name.givenName,
                lastName: name.familyName,
                acessToken
            }
            done(null, user)
        }
}