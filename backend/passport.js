var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID = "648982168253-5360vpv4c5n3bushheqpps8r466l7ek6.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

// const GOOGLE_CLIENT_ID =
//     "your id";
// const GOOGLE_CLIENT_SECRET = "your id";

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});