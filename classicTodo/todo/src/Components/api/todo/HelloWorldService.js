import axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        // console.log('executed service');
        return axios.get('http://localhost:8080/hello-world'); //promise

    };
    executeHelloWorldBeanService() {
        // console.log('executed service');
        return axios.get('http://localhost:8080/hello-world-bean'); //promise

    };
    executeHelloWorldPathVariableService(name) {
        // console.log('executed service');
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`); //promise

    };

}
export default new HelloWorldService();
