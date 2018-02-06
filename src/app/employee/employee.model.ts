
export class Employee {
   
        public id: number;
        public firstName: string;
        public lastName: string;
        public email: string;
        public contact: string;
        public address: string;
        public userName: string;
        public password: string;
        public gender: string;
        public qualification: string;
        public experience: string;
        public languages: string[];

        constructor(){
            this.id = 0;
            this.firstName='';
            this.lastName='';
            this.email='';
            this.contact='';
            this.address='';
            this.userName='';
            this.password='';
            this.gender='';
            this.qualification='';
            this.experience='';
            this.languages = [];
        }

        public add(languages: string): void{
            var x = <HTMLInputElement>document.getElementById(languages);
            if(x.checked){
                this.languages.push(languages);
            }
            else{
                const index: number = this.languages.indexOf(languages);
                if (index !== -1) {
                this.languages.splice(index, 1);
                }        
            }
        }

        public copyTo(object: any)
        {
            this.id = object.id;
            this.firstName= object.firstName;
            this.lastName= object.lastName;
            this.email= object.email;
            this.contact= object.contact;
            this.address= object.address;
            this.userName= object.userName;
            this.password= object.password;
            this.gender= object.gender;
            this.qualification= object.qualification;
            this.experience= object.experience;
            this.languages = object.languages;
        }
        
}