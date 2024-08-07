<script>
  import { onMount } from 'svelte';
  import { getDevice } from 'framework7/lite-bundle';
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';

  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import store from '../js/store';

  const device = getDevice();
  let f7params = {
    name: 'CureMe: Medical App',
    theme: 'auto',
    colors: {
      primary: '#c7b8ea',
    },
    darkMode: true,
    store: store,
    routes: routes,
    serviceWorker: process.env.NODE_ENV === 'production' ? {
      path: '/service-worker.js',
    } : {},
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  let username = '';
  let password = '';

  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }

  onMount(() => {
    f7ready(() => {
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
    });
  });
</script>

<App { ...f7params }>
  <Panel left cover dark>
    <View>
      <Page>
        <Navbar title="Left Panel"/>
        <Block>Left panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <Panel right reveal dark>
    <View>
      <Page>
        <Navbar title="Right Panel"/>
        <Block>Right panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <Views tabs class="safe-areas">
    <Toolbar tabbar icons bottom>
      <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
      <Link tabLink="#view-users" iconIos="f7:square_list_fill" iconMd="material:view_list" text="Users" />
      <Link tabLink="#view-medications" iconIos="f7:pills" iconMd="material:medications" text="Medications" />
      <Link tabLink="#view-appointments" iconIos="f7:calendar" iconMd="material:appointments" text="Appointments" />
      <Link tabLink="#view-reminders" iconIos="f7:bell_fill" iconMd="material:reminders" text="Reminders" />
      <Link tabLink="#view-notifications" iconIos="f7:envelope_fill" iconMd="material:notifications" text="Notifications" />
      <Link tabLink="#view-settings" iconIos="f7:gear" iconMd="material:settings" text="Settings" />
    </Toolbar>

    <View id="view-home" main tab tabActive url="/" />
    <View id="view-users" name="users" tab url="/users/" />
    <View id="view-medications" name="medications" tab url="/medications/" />
    <View id="view-appointments" name="appointments" tab url="/appointments/" />
    <View id="view-reminders" name="reminders" tab url="/reminders/" />
    <View id="view-notifications" name="notifications" tab url="/notifications/" />
    <View id="view-settings" name="settings" tab url="/settings/" />
  </Views>

  <Popup id="my-popup">
    <View>
      <Page>
        <Navbar title="Popup">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>Popup content goes here.</p>
        </Block>
      </Page>
    </View>
  </Popup>

  <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            bind:value={username}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            bind:value={password}
          />
        </List>
        <List>
          <ListButton title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>
</App>
