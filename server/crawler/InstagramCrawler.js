import InstagramAuth from "./InstagramAuth";

export default class {
    auth(username, password) {
        this.auth = new InstagramAuth(username, password);
        
        return this.auth.login().then(session => this.session = session);
    }
}
