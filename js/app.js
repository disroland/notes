const todo = new Vue(
    {
        el:'main',
        data:{
            test: '',
            todoArr:[],
            bgc:'tomato',
            col:'black',
            placeH: 'enter your note here',
            boo: false,
        },
        methods:{
            addOne(){
                if (this.test.length > 3 && this.test.length < 30){
                this.todoArr.push(this.test);
                this.test = '';
                this.showNotes()
                }
            },
            deleteItem(index){
               this.todoArr.splice(index, 1);
               this.showNotes()
            },
            changeColor(){
                    if (this.test.length > 3 && this.test.length < 30){
                        this.bgc="blue";
                        this.col ="white"
                    } else if (this.test.length > 0 && this.test.length <= 3){
                        this.bgc="pink";
                        this.col='blue'
                    } else {
                        this.bgc="tomato";
                        this.col='white'
                    }
            },
            showNotes(){
                if(this.todoArr.length > 0){
                this.boo = true
            } else {this.boo = false}
        },
        mounted(){
            if (localStorage.todo){
                this.todoArr = localStorage.todo
            }
        },
        saveData(){
            console.log(this.todoArr);
            localStorage.setItem('todo', JSON.stringify(this.todoArr))
        },
        loadData(){
            this.todoArr = JSON.parse(localStorage.getItem("todo"));
            this.showNotes()
        }

        }
}
)
