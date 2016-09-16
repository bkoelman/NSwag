﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v5.6.6103.42162 (NJsonSchema v4.11.6103.32935) (http://NSwag.org)
// </auto-generated>
//----------------------

export class PersonsClient {
    private baseUrl: string = undefined; 
    private http: ng.IHttpService = null; 
    private jsonParseReviver: (key: string, value: any) => any = undefined; 

    constructor($http: ng.IHttpService, baseUrl?: string, jsonParseReviver?: (key: string, value: any) => any) {
        this.http = $http; 
        this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452"; 
        this.jsonParseReviver = jsonParseReviver;
    }

    getAll(): ng.IPromise<Person[]> {
        var url = this.baseUrl + "/api/Persons"; 

        var content_ = "";

        return this.http({
            url: url,
            method: "GET",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processGetAll(response);
        });
    }

    private processGetAll(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 200) {
            var result200: Person[] = null; 
            var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Person.fromJS(item));
            }
            return result200; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    add(person: Person): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Persons"; 

        var content_ = JSON.stringify(person ? person.toJS() : null);

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processAdd(response);
        });
    }

    private processAdd(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    find(gender: Gender): ng.IPromise<Person[]> {
        var url = this.baseUrl + "/api/Persons/find/{gender}?"; 

        if (gender === undefined || gender === null)
            throw new Error("The parameter 'gender' must be defined.");
        url = url.replace("{gender}", encodeURIComponent("" + gender)); 

        var content_ = "";

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processFind(response);
        });
    }

    private processFind(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 200) {
            var result200: Person[] = null; 
            var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Person.fromJS(item));
            }
            return result200; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    find2(gender: Gender): ng.IPromise<Person[]> {
        var url = this.baseUrl + "/api/Persons/find2"; 

        if (gender === undefined)
            throw new Error("The parameter 'gender' must be defined.");
        else
            url += "gender=" + encodeURIComponent("" + gender) + "&"; 

        var content_ = "";

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processFind2(response);
        });
    }

    private processFind2(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 200) {
            var result200: Person[] = null; 
            var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Person.fromJS(item));
            }
            return result200; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    get(id: string): ng.IPromise<Person> {
        var url = this.baseUrl + "/api/Persons/{id}?"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url = url.replace("{id}", encodeURIComponent("" + id)); 

        var content_ = "";

        return this.http({
            url: url,
            method: "GET",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processGet(response);
        });
    }

    private processGet(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 200) {
            var result200: Person = null; 
            var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            result200 = resultData200 ? Person.fromJS(resultData200) : null;
            return result200; 
        }
        else
        if (status === 500) {
            var result500: PersonNotFoundException = null; 
            var resultData500 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            throw result500; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    delete(id: string): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Persons/{id}?"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url = url.replace("{id}", encodeURIComponent("" + id)); 

        var content_ = "";

        return this.http({
            url: url,
            method: "DELETE",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processDelete(response);
        });
    }

    private processDelete(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    /**
     * Gets the name of a person.
     * @id The person ID.
     * @return The person's name.
     */
    getName(id: string): ng.IPromise<string> {
        var url = this.baseUrl + "/api/Persons/{id}/Name?"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url = url.replace("{id}", encodeURIComponent("" + id)); 

        var content_ = "";

        return this.http({
            url: url,
            method: "GET",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processGetName(response);
        });
    }

    private processGetName(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 200) {
            var result200: string = null; 
            var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200; 
        }
        else
        if (status === 500) {
            var result500: PersonNotFoundException = null; 
            var resultData500 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            throw result500; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }
}

export class GeoClient {
    private baseUrl: string = undefined; 
    private http: ng.IHttpService = null; 
    private jsonParseReviver: (key: string, value: any) => any = undefined; 

    constructor($http: ng.IHttpService, baseUrl?: string, jsonParseReviver?: (key: string, value: any) => any) {
        this.http = $http; 
        this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452"; 
        this.jsonParseReviver = jsonParseReviver;
    }

    fromBodyTest(location: GeoPoint): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Geo/FromBodyTest"; 

        var content_ = JSON.stringify(location ? location.toJS() : null);

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processFromBodyTest(response);
        });
    }

    private processFromBodyTest(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    fromUriTest(latitude: number, longitude: number): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Geo/FromUriTest"; 

        if (latitude === null)
            throw new Error("The parameter 'latitude' cannot be null.");
        else if (latitude !== undefined)
            url += "Latitude=" + encodeURIComponent("" + latitude) + "&"; 
        if (longitude === null)
            throw new Error("The parameter 'longitude' cannot be null.");
        else if (longitude !== undefined)
            url += "Longitude=" + encodeURIComponent("" + longitude) + "&"; 

        var content_ = "";

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processFromUriTest(response);
        });
    }

    private processFromUriTest(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    addPolygon(points: GeoPoint[]): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Geo/AddPolygon"; 

        var contentData_: any = [];
        if (points) {
            for (let item of points)
                contentData_.push(item.toJS());
        }
        var content_ = JSON.stringify(points ? contentData_ : null);

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processAddPolygon(response);
        });
    }

    private processAddPolygon(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    refresh(): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Geo/Refresh"; 

        var content_ = "";

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processRefresh(response);
        });
    }

    private processRefresh(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    uploadFile(file: FileParameter): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Geo/UploadFile"; 

        var content_ = new FormData();
        if (file !== null)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                'Content-Type': undefined
            }
        }).then((response) => {
            return this.processUploadFile(response);
        });
    }

    private processUploadFile(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    uploadFiles(files: FileParameter[]): ng.IPromise<void> {
        var url = this.baseUrl + "/api/Geo/UploadFiles"; 

        var content_ = new FormData();
        if (files !== null)
            files.forEach(item_ => content_.append("files", item_.data, item_.fileName ? item_.fileName : "files") );

        return this.http({
            url: url,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                'Content-Type': undefined
            }
        }).then((response) => {
            return this.processUploadFiles(response);
        });
    }

    private processUploadFiles(response: any) {
        var data = response.data;
        var status = response.status; 

        if (status === 204) {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }
}

export class Person { 
    id: string; 
    /** Gets or sets the first name. */
    firstName: string; 
    /** Gets or sets the last name. */
    lastName: string; 
    gender: Gender; 
    dateOfBirth: Date; 
    weight: number; 
    height: number; 
    age: number; 
    address: Address = new Address(); 
    children: Person[] = []; 
    skills: { [key: string] : SkillLevelAsInteger; }; 
    protected discriminator: string;

    constructor(data?: any) {
        this.discriminator = "Person";
        if (data !== undefined) {
            this.id = data["Id"] !== undefined ? data["Id"] : null;
            this.firstName = data["FirstName"] !== undefined ? data["FirstName"] : null;
            this.lastName = data["LastName"] !== undefined ? data["LastName"] : null;
            this.gender = data["Gender"] !== undefined ? data["Gender"] : null;
            this.dateOfBirth = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : null;
            this.weight = data["Weight"] !== undefined ? data["Weight"] : null;
            this.height = data["Height"] !== undefined ? data["Height"] : null;
            this.age = data["Age"] !== undefined ? data["Age"] : null;
            this.address = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
            if (data["Children"] && data["Children"].constructor === Array) {
                this.children = [];
                for (let item of data["Children"])
                    this.children.push(Person.fromJS(item));
            }
            if (data["Skills"]) {
                this.skills = {};
                for (let key in data["Skills"]) {
                    if (data["Skills"].hasOwnProperty(key))
                        this.skills[key] = data["Skills"][key] !== undefined ? data["Skills"][key] : null;
                }
            }
            this.discriminator = data["discriminator"] !== undefined ? data["discriminator"] : null;
        }
    }

    static fromJS(data: any): Person {
        if (data["discriminator"] === "Teacher")
            return new Teacher(data);
        return new Person(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Id"] = this.id !== undefined ? this.id : null;
        data["FirstName"] = this.firstName !== undefined ? this.firstName : null;
        data["LastName"] = this.lastName !== undefined ? this.lastName : null;
        data["Gender"] = this.gender !== undefined ? this.gender : null;
        data["DateOfBirth"] = this.dateOfBirth ? this.dateOfBirth.toISOString() : null;
        data["Weight"] = this.weight !== undefined ? this.weight : null;
        data["Height"] = this.height !== undefined ? this.height : null;
        data["Age"] = this.age !== undefined ? this.age : null;
        data["Address"] = this.address ? this.address.toJS() : null;
        if (this.children && this.children.constructor === Array) {
            data["Children"] = [];
            for (let item of this.children)
                data["Children"].push(item.toJS());
        }
        if (this.skills) {
            data["Skills"] = {};
            for (let key in this.skills) {
                if (this.skills.hasOwnProperty(key))
                    data["Skills"][key] = this.skills[key] !== undefined ? this.skills[key] : null;
            }
        }
        data["discriminator"] = this.discriminator !== undefined ? this.discriminator : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Person(JSON.parse(json));
    }
}

export class Teacher extends Person { 
    course: string;

    constructor(data?: any) {
        super(data);
        this.discriminator = "Teacher";
        if (data !== undefined) {
            this.course = data["Course"] !== undefined ? data["Course"] : null;
        }
    }

    static fromJS(data: any): Teacher {
        return new Teacher(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Course"] = this.course !== undefined ? this.course : null;
        super.toJS(data);
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Teacher(JSON.parse(json));
    }
}

export enum Gender {
    Male = <any>"Male", 
    Female = <any>"Female", 
}

export class Address { 
    isPrimary: boolean; 
    city: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.isPrimary = data["IsPrimary"] !== undefined ? data["IsPrimary"] : null;
            this.city = data["City"] !== undefined ? data["City"] : null;
        }
    }

    static fromJS(data: any): Address {
        return new Address(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["IsPrimary"] = this.isPrimary !== undefined ? this.isPrimary : null;
        data["City"] = this.city !== undefined ? this.city : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Address(JSON.parse(json));
    }
}

export enum SkillLevelAsInteger {
    Low = 0, 
    Medium = 1, 
    Height = 2, 
}

export class Exception { 
    message: string; 
    innerException: Exception; 
    stackTrace: string; 
    source: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.message = data["Message"] !== undefined ? data["Message"] : null;
            this.innerException = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : null;
            this.stackTrace = data["StackTrace"] !== undefined ? data["StackTrace"] : null;
            this.source = data["Source"] !== undefined ? data["Source"] : null;
        }
    }

    static fromJS(data: any): Exception {
        return new Exception(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Message"] = this.message !== undefined ? this.message : null;
        data["InnerException"] = this.innerException ? this.innerException.toJS() : null;
        data["StackTrace"] = this.stackTrace !== undefined ? this.stackTrace : null;
        data["Source"] = this.source !== undefined ? this.source : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Exception(JSON.parse(json));
    }
}

export class PersonNotFoundException extends Exception { 
    id: string;

    constructor(data?: any) {
        super(data);
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }

    static fromJS(data: any): PersonNotFoundException {
        return new PersonNotFoundException(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : null;
        super.toJS(data);
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new PersonNotFoundException(JSON.parse(json));
    }
}

export class GeoPoint { 
    latitude: number; 
    longitude: number;

    constructor(data?: any) {
        if (data !== undefined) {
            this.latitude = data["Latitude"] !== undefined ? data["Latitude"] : null;
            this.longitude = data["Longitude"] !== undefined ? data["Longitude"] : null;
        }
    }

    static fromJS(data: any): GeoPoint {
        return new GeoPoint(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Latitude"] = this.latitude !== undefined ? this.latitude : null;
        data["Longitude"] = this.longitude !== undefined ? this.longitude : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new GeoPoint(JSON.parse(json));
    }
}

export interface FileParameter
{
    data: any;
    fileName: string;
}