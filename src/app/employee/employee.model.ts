
export class Employee {
   
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
        
}