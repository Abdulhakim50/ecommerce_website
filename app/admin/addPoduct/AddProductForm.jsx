'use client'
import React from 'react'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import { useForm } from 'react-hook-form';
import Checkbox from '@/components/Checkbox';
import CatagoryInput from '@/components/CatagoryInput';
import SelectColor from '@/components/SelectColor';
import toast from 'react-hot-toast';
import { getStorage,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import  {useEffect,useState,useCallback} from 'react';
import Btn from '@/components/Btn';
 import { catagories } from '@/utils/Catagories';
 import { colors } from '@/utils/Colors';
 import firebaseApp from '@/libs/firebase';
 import { ref } from 'firebase/storage';

 
 



const AddProductForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [images, setimages] = useState(null)
    const [isProductCeated, setisProductCeated] = useState(false)

    const router = useRouter();
    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: '',
            brand: '',
            catagory: '',
            inStock: false,
            images: [],
            price:'',

        }
    });

    useEffect(() => {
        setCustomValue('images', images)
    }, [images])

    useEffect(() => {
        if (isProductCeated) {
            reset();
            setimages(null);
            setisProductCeated(false)
        }
    }, [isProductCeated])

    const onSubmit = async (data) => {
        
      
        setIsLoading(true)

        let uploadImages = []

        if (!data.catagory) {
            setIsLoading(false)
            return toast.error('catagory is not selected!')
        }
        if (!data.images || data.images.length === 0) {
            setIsLoading(false)
            return toast.error('no selected image!')
        }
   

    const handleImgUpload = async () => {
        toast("creating product,please wait...")
        try {
            for (const item of data.images) {
                if (item.image) {
                    const fileNAme = new Date().getTime() + '-' + item.image.name;
                    const storage = getStorage(firebaseApp)
                    const storageRef = ref(storage, `products/${fileNAme}`)
                    const uploadTask = uploadBytesResumable(storageRef, item.image)

                    await new Promise((resolve, reject) => {
                        uploadTask.on(
                            'state_changed',
                            (snapshot) => {
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                console.log('upload is' + progress + '%done');
                                switch (snapshot.state) {
                                    case 'paused':
                                        console.log('upload is paused')
                                        break;
                                    case 'running':
                                        console.log('upload is running')
                                        break;
                                }
                            },
                            (error) => {
                                console.log('error uploadin image')
                                reject(error)
                            },
                            ()=>{
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                uploadImages.push({
                                    ...item, image: downloadURL
                                });

                                console.log('file avilable at', downloadURL)
                                resolve()
                            }).catch((error) => {
                                reject(error)
                            })
                        }
                        )
                    })
                }
            }
        } catch (error) {
            setIsLoading(false)

            console.log('error handling image uploads',error)
            return toast('error handling image uploads')
        }
    }
        await handleImgUpload();
        const productData = { ...data, images: uploadImages };
        console.log(productData)
        axios.post('/api/product', productData).then(() => {
            setisProductCeated(true);
            router.refresh()
        }).catch((error) => {
            toast.error('someting went wrong when saving product')
        }).finally(() => {
            setIsLoading(false)
        })
   

}
    const catagory = watch("catagory")
    const setCustomValue = (id, value) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shoukdTouch: true
        })
    };
    const addImageTOState = useCallback(
        (value) => {
            setimages((prev) => {
                if (!prev) {
                    return [value]
                }

                return [...prev, value]
            })
        },
        [],
    )
    const removeImageFormState = useCallback(
        (value) => {
            setimages((prev) => {
                if (prev) {
                    const filteredImages = prev.filter(
                        (items) => items.color !== value.color
                    );
                    return filteredImages;
                }

                return prev;
            })

        },
        [],
    )


    return (
        <div className="mx-auto p-4 max-w-lg  ">
        <div>
          <p className="text-center text-2xl font-bold mb-4">Add Product</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
      id="name"
      label="Name"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
    />
    <Input
      id="price"
      label="Price"
      disabled={isLoading}
      register={register}
      errors={errors}
      type="number"
      required
      className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
    />
    <Input
      id="brand"
      label="Brand"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
    />
    <Textarea
      id="description"
      label="Description"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      className="mb-4 p-3 border border-gray-300 rounded-md w-full h-32 focus:outline-none focus:ring focus:border-blue-300 resize-none"
    />
    <div className="flex items-center mb-4">
      <Checkbox
        id="inStock"
        label="This Product is in stock"
        register={register}
        className="mr-2"
      />
      <label htmlFor="inStock" className="text-sm text-gray-600">
        This Product is in stock
      </label>
    </div>
        </div>
        <div className="w-full font-medium mt-4">
          <div className="mb-2 font-semibold">Select a Category</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto">
            {catagories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CatagoryInput
                  onClick={(catagory) => setCustomValue('catagory', catagory)}
                  selected={catagory === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          {colors.map((items, index) => (
            <SelectColor
              key={index}
              items={items}
              addImageTOState={addImageTOState}
              removeImageFormState={removeImageFormState}
              isProductCreated={false}
            />
          ))}
        </div>
        <Btn
          label={isLoading ? 'Loading' : 'Add Product'}
          onClick={handleSubmit(onSubmit)}
          className="mt-4"
        />
      </div>
      
    )
}

export default AddProductForm