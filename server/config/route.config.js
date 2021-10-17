
/*import JwtPassport from "passport-jwt";
import passport from "passport";
//Database model
import {UserModel} from "../database/user";

const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp"
};

export default (passport) => {
    passport.UserModel(
        new JwtStrategy(options, async(jwt__payload, done)=>{
            try {
                const doesUserExist = UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null, false);

                return done(null, doesUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    )
};
*/

import JwtPassport from 'passport-jwt';

// Database
import { UserModel } from '../database/allModels';

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ZomatoAPP',
};

export default (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExist = await UserModel.findById(jwt__payload.user);

        if (!doesUserExist) return done(null, false);

        return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};