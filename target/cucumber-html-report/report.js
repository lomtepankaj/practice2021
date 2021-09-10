$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/BDDPOM/Features/Anonymoose.feature");
formatter.feature({
  "line": 1,
  "name": "Login to AM WebApp",
  "description": "",
  "id": "login-to-am-webapp",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6205079100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User logins to AMWEB",
  "description": "",
  "id": "login-to-am-webapp;user-logins-to-amweb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User gets logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.User_launch_url()"
});
formatter.result({
  "duration": 17500225400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.User_enters_credentials()"
});
formatter.result({
  "duration": 4063355900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.getloginpagetitle()"
});
formatter.result({
  "duration": 15676700,
  "status": "passed"
});
formatter.before({
  "duration": 2089263400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User goes to Hotlines",
  "description": "",
  "id": "login-to-am-webapp;user-goes-to-hotlines",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User cliks on Hotlines",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User goes to Hotlines directory",
  "keyword": "Then "
});
formatter.match({
  "location": "gotoHotlines.User_on_Homepage()"
});
formatter.result({
  "duration": 21582600,
  "status": "passed"
});
formatter.match({
  "location": "gotoHotlines.Use_clicks_hotlines()"
});
formatter.result({
  "duration": 49166700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Hotlines\u0027)]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-beta-4\u0027, revision: \u002729f46d02dd\u0027\nSystem info: host: \u0027DS-231\u0027, ip: \u0027192.168.43.168\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [635b1249d61e7954bd3ee28c81acde2d, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Hotlines\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Pankajl\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60439}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60439/devtoo..., se:cdpVersion: 90.0.4430.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 635b1249d61e7954bd3ee28c81acde2d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:162)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:137)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:612)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$Mechanism$2.findElement(RemoteWebDriver.java:1251)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:373)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.BDDPOM.pages.Homepage.gotoHotlines(Homepage.java:26)\r\n\tat com.BDDPOM.stepDefinitions.gotoHotlines.Use_clicks_hotlines(gotoHotlines.java:28)\r\n\tat ✽.When User cliks on Hotlines(src/main/java/com/BDDPOM/Features/Anonymoose.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "gotoHotlines.go_to_hotline_directory()"
});
formatter.result({
  "status": "skipped"
});
formaformatter.before({
  "duration": 4647821700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User sorts the Hotlines",
  "description": "",
  "id": "login-to-am-webapp;user-sorts-the-hotlines",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User is on Hotlines Directory",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Hotline name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Results are sorted",
  "keyword": "Then "
});
formatter.match({
  "location": "sortHotlines.User_on_HL_DIR()"
});
formatter.result({
  "duration": 188845100,
  "status": "passed"
});
formatter.match({
  "location": "sortHotlines.User_on_Hotlines_Name()"
});
formatter.result({
  "duration": 251400600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div/span[text()\u003d\u0027Hotline Name\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-beta-4\u0027, revision: \u002729f46d02dd\u0027\nSystem info: host: \u0027DS-231\u0027, ip: \u0027192.168.43.168\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9a0f637be71462a5e4a13e9a10f3be04, findElement {using\u003dxpath, value\u003d//div/span[text()\u003d\u0027Hotline Name\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Pankajl\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:64218}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64218/devtoo..., se:cdpVersion: 90.0.4430.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9a0f637be71462a5e4a13e9a10f3be04\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:162)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:137)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:612)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$Mechanism$2.findElement(RemoteWebDriver.java:1251)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:373)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.BDDPOM.pages.Hotlines.sorting(Hotlines.java:26)\r\n\tat com.BDDPOM.stepDefinitions.sortHotlines.User_on_Hotlines_Name(sortHotlines.java:29)\r\n\tat ✽.When User clicks on Hotline name(src/main/java/com/BDDPOM/Features/Anonymoose.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sortHotlines.Results_sorted()"
});
formatter.result({
  "status": "skipped"
});
