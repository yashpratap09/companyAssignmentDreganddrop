import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import "./getAllData.css"



const GetAllData = () => {

   

    const [Task, setTask] = useState([]);



    useEffect(() => {

        axios.get("https://draganddrop-j8t4.onrender.com/getData").then((Response) => {

            setTask(Response.data.data)
        }).catch((error) => {
            alert(error.response.data.message)
        })

    }, []);



    const dragStarted = (e, id) => {
        // console.log("Started")
        // console.log(id.Title)
        e.dataTransfer.setData("Title", id.Title)
      //  console.log(id)


    }

    const draggingOver = (e) => {
        e.preventDefault();
        console.log("OnOver")

    }

    const dragDropped1 = (e) => {
        //  console.log("you dropped")
        let Status = "Open"
        let Title = (e.dataTransfer.getData('Title'))
        // console.log(Title)
        // console.log(Status)

        axios
            .put("https://draganddrop-j8t4.onrender.com/updateData", {
                Title, Status
            }).then((response) => {
                window.location.reload(false)
                //    e.preventDefault();
                //console.log("response", response)

            }).catch((error) => {
                alert(error.response.data.message)
            })



    }




    const dragDropped3 = (e) => {
        //   console.log("you dropped")
        let Status = "Completed"
        let Title = (e.dataTransfer.getData('Title'))
        //   console.log(Title)
        //   console.log(Status)

        axios
            .put("https://draganddrop-j8t4.onrender.com/updateData", {
                Title, Status


            }).then((response) => {
                window.location.reload(false)
                //    e.preventDefault();
                console.log("response", response)

            }).catch((error) => {
                alert(error.response.data.message)
            })


    }






    const dragDropped2 = (e) => {
        //   console.log("you dropped")
        let Status = "In-Progress"
        let Title = (e.dataTransfer.getData('Title'))
        //   console.log(Title)
        //   console.log(Status)

        axios
            .put("https://draganddrop-j8t4.onrender.com/updateData", {
                Title, Status


            }).then((response) => {
                window.location.reload(false)
                //    e.preventDefault();
                console.log("response", response)

            }).catch((error) => {
                alert(error.response.data.message)
            })


    }








    return (
        < >
            <div className="App">
                <div className="container">

                    <div className="bar">
                        <h3>Open</h3>
                        <h3>InProgress</h3>
                        <h3>Completed</h3>
                    </div>

                    <div className="todos_wrapper">

                        <div className="todos_list" style={{ background: "rgb(245, 245, 128)" }} onDrop={(e) => dragDropped1(e)} onDragOver={(e) =>
                            draggingOver(e)}>
                            <h3 className="todo_title"></h3>

                            {Task.map((data, index) => {
                                const { Title, Status, Description } = data;
                                {
                                    if (Status === "Open") {
                                        return (

                                            <div className="column1" key={index} droppable="true" draggable onDragStart={(e) => dragStarted(e, { Title })}
                                            >
                                                <h4>Title:-  {Title}</h4>
                                                <h6>Description:-    {Description}</h6>
                                                <p>Status:- {Status}</p>


                                            </div>
                                        )
                                    }
                                }

                            })}



                        </div>
                        <div className="todos_list" style={{ background: "rgb(245, 245, 128)" }} onDrop={(e) => dragDropped2(e)} onDragOver={(e) =>
                            draggingOver(e)}>
                            <h3 className="todo_title"></h3>
                            {Task.map((data, index) => {
                                const { Title, Status, Description } = data;
                                {
                                    if (Status === "In-Progress") {
                                        return (

                                            <div className="column1" key={index} droppable="true" draggable onDragStart={(e) => dragStarted(e, { Title })}
                                            >
                                                <h4>Title:-  {Title}</h4>
                                                <h6>Description:-    {Description}</h6>
                                                <p>Status:- {Status}</p>


                                            </div>
                                        )
                                    }
                                }

                            })}



                        </div>
                        <div className="todos_list" style={{ background: "rgb(245, 245, 128)" }} onDrop={(e) => dragDropped3(e)} onDragOver={(e) =>
                            draggingOver(e)}>
                            <h3 className="todo_title"></h3>

                            {Task.map((data, index) => {
                                const { Title, Status, Description } = data;
                                {
                                    if (Status === "Completed") {
                                        return (

                                            <div className="column1" key={index} droppable="true" draggable onDragStart={(e) => dragStarted(e, { Title })}
                                            >
                                                <h4>Title:-  {Title}</h4>
                                                <h6>Description:-    {Description}</h6>
                                                <p>Status:- {Status}</p>


                                            </div>
                                        )
                                    }
                                }

                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>

    )


}

export default GetAllData
