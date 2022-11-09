import {useEffect, useState} from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import toast from "admin-lte/plugins/toastr/toastr.min"
import {Formik} from "formik";

const Users = () =>{
    const [todos,setTodos] = useState([])
    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'userId',
            selector: row => row.userId,
            sortable: true,
        },
        /*{
            name: 'completed',
            selector: row => row.completed,
        },*/
    ];

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => {
                console.log('api called',response.data)
                setTodos(response.data)
            })
    },[])

    function handleClick() {
        console.log('I am clicked')
        toast.success('I am clicked.');
    }

    return (
        <div>
            <div className="content-header">
                <h1 className={'title'}>Todo's </h1>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-body">
                            <DataTable
                                columns={columns}
                                data={todos}
                                pagination
                                striped={true}
                            />
                        </div>
                    </div>

                </div>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header"><h4 className={'title text-center'}> New Todo</h4></div>
                        <div className="card-body">
                            Sample Views
                        </div>
                        <div className="card-footer">
                            <button className={'btn btn-small btn-success'} onClick={()=>handleClick()}>Click to see toast</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Users