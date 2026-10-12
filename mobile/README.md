# TripFund mobile app (Capacitor)
Wraps the static site (repo root) as native iOS/Android apps. App id: `com.tripfund.app`.
Requires Node 22+, JDK 21 + Android SDK (Android), Xcode on a Mac (iOS).

    cd mobile && npm install
    npm run sync          # copy site into www/ and sync native projects
    npm run apk           # Android debug APK -> android/app/build/outputs/apk/debug/
    npx cap open ios      # open in Xcode (Mac only), then Archive for App Store

Release: Android `./gradlew bundleRelease` with your keystore -> upload .aab to Play Console.
