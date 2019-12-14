import React from "react";

class Content extends React.Component{


    constructor(props) {
        super(props)
        this.state = {data:undefined}
    }
    

        
    

     async getData(){
         
        let dbObject = await fetch("https://my.askent.ru/rest/get.php", {
            method: "post",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //body: app.createQueryString(valuePostRequest)
        });

        let list = await dbObject.json();
        //this.setState({data:123})
        

        
        //return this.state.data = list;
    }

    render(){
        //this.getData();
        console.log(this.state.data);
       

        return (
            <div className = "row">
                 <div className = "col-md-12">
                      <div className = "content">`Контент`</div>
                 </div>
            </div>
        );
    }
}

export default Content;