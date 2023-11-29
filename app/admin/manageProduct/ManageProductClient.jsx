'use client'


import {DataGrid,GridColDef} from "@mui/x-data-grid"
import Status from "@/components/Status"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter} from "next/navigation"
import firebaseApp from "@/libs/firebase"
import { getStorage } from "firebase/storage"
import formatPrice from "@/utils/formatPrice"
import { useCallback } from "react"
import { MdDelete } from "react-icons/md/MdDelete"
 import { MdLegendToggle } from "react-icons/md/MdLegendToggle"
import { MdViewColumn } from "react-icons/md/MdViewColumn"
import { deleteObject } from "firebase/storage"


const ManageProductClient =({products})=>{

    const router= useRouter()
    const storage= getStorage(firebaseApp)


    let rows=[];
    if(products){
    rows=products.map((product)=>{
    return {
        id:product.id,
        name:product.name,
        price:formatPrice(product.price),
        catagory:product.catagory,
        brand:product.brand,
        inStock:product.inStock,
        images:product.images

    }
})
    }
    const columns=[
        {field:'id',headerName:'ID',width:220},
        {field:'name',headerName:'Name',width:220},
        {field:'price',headerName:'Price(USD)',width:100,
         renderCell:(params)=>{
    return(
        <div className="font-bold">{params.row.price}</div>
    )
  }  
    },
    {field:'catagory',headerName:'Catagory',width:100},
    {field:'brand',headerName:'Brand',width:100},
    {field:'inStock',headerName:'inStock',width:120,renderCell:
    (params)=>{
        return(
            <div className="font-bold">{params.row.inStock === true ?(<Status text="in Stock"/>  )  : 'out of stock'}</div>
        )
      }  
},
{field:'action',headerName:'Actions',width:200,
renderCell:(params)=>{
    return(
 <div className="gap-3">
    <button type="button" onClick={handleToggleStock}><MdLegendToggle/></button>
    <button type="button"  onClick={()=>{handleDelete(params.row.id,params.row.images)}}><MdDelete/></button>
    <button type="button"  onClick={()=>router.push(`product/${params.row.id}`)}  ><MdViewColumn/> </button>
 </div> 
        )
  },  
},
    ];

    const handleToggleStock=useCallback((id,inStock) => {
    axios.put('/api/product',{
        id,
        inStock:!inStock
    }).then((res)=>{
        toast.success('product status changed')
        router.refresh()
    }).catch((erorr)=>{
        toast.error('Oops! someting wen wrong')
        console.log(erorr)
    })
      },
      [] )
   
    

    const handleDelete =useCallback(async(id,images) => {
        toast('deleting product ,please wait')

       const handleImgDelete=async()=>{
        try {
        for(const item of images){
            if(item.image){
                const imagRef =ref(storage, item.image)
                await deleteObject(imagRef);
              console.log("image deleted",item.image)
            }
        }
    } catch (error) {
        return console.log("deleting images error" ,error)
    }
        };

       await handleImgDelete()

    axios.delete(`/api/product/${id}`).then((res)=>{
        toast.success("poduct deleted");
        router.refresh();
    }).catch((err)=>{
        toast.error("failed to delete product")
        console.log(err)
    })
      },
      [],
    )
    
    return(
    <div>
       <DataGrid
       rows={rows}
       columns={columns}
       initialState={{
        pagination:{
            paginationModel:{page:0,pageSize:5},

        },
    }}
        pageSizeOptions={[9,20]}
        checkboxSelection
        disableRowSelectionOnClick
    
       /> 
    </div>

    )
}

export default ManageProductClient