import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaCartPlus, FaMinus, FaPlus, FaShoppingBasket, FaTrash } from 'react-icons/fa';

function POS() {
    const [backendData, setBackendData] = useState([])

    const fetchProducts = async () => {
        const result = await axios.get('api')
        setBackendData(await result.data);
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='flex flex-col gap-4 items-center bg-slate-200 w-full h-full justify-start'>
            {/* == NAVBAR ==  */}
            <div id='navbar' className='flex w-5/6  md:w-4/5 lg:w-1/2 items-center justify-center space-x-4 p-2'>
                <h1 className='text-4xl font-bold'>EPOS</h1>
                <input name='search' placeholder='Search' className='flex w-full p-2 border-2 border-slate-400 rounded-md relative bg-slate-100' />
                <div className='flex flex-col h-12 w-16 rounded-lg items-center justify-center bg-yellow-400'>
                    <FaShoppingBasket style={{ fontSize: '24px' }} />
                </div>
            </div>

            {/* == MAIN == */}
            <div className='flex w-full h-full space-x-2 p-2'>
                {/* LEFT TWO THIRDS */}
                <div className='grid grid-cols-2 gap-2 w-3/5 h-1/2'>
                    {backendData.products && (
                        backendData.products.map((product, index, key, t, p, i) => (
                            <div key={index} className='flex flex-col w-full h-2/3 justify-center items-center bg-slate-100 border-4 border-sky-200 rounded-md bg-clip-border'>
                                <div className='flex w-full bg-yellow-50 h-full p-2 justify-center items-center relative'>
                                    <div className='absolute top-2 left-2 bg-red-400 p-[0.5px] rounded-sm px-1 text-[10px] text-white font-medium'>
                                        NEW
                                    </div>
                                    <p>item image</p>
                                </div>
                                <div className='container w-full p-2'>
                                    <p
                                        key={t}
                                        className='text-md text-slate-900 font-medium'
                                    >
                                        {product.title}
                                    </p>
                                    <div key={key} className='flex w-full justify-between items-end'>
                                        <div key={p} className='font-bold text-xl'>${product.price}</div>
                                        <div className='flex items-center space-x-2 bg-blue-400 p-2 rounded-md border'>
                                            <FaCartPlus style={{ color: '#ffffff' }} />
                                            <p className='font-bold text-sm text-white'>Add</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {/* RIGHT ONE THIRD */}
                <div className='flex w-2/5'>
                    <div className='flex flex-col w-full items-center bg-stone-50 rounded-sm'>
                        <ul
                            id='checkout-panel-headers'
                            className='grid grid-cols-4 w-full justify-between p-2 border-b border-slate-500'>
                            <li className='flex justify-center'>Item</li>
                            <li className='flex justify-center'>Qty</li>
                            <li className='flex justify-center'>Price</li>
                            <li className='flex justify-center'>Delete</li>
                        </ul>
                        <div className='grid grid-cols-4 w-full py-2 border-b'>
                            <p className='flex justify-center items-center text-sm text-center'>Product name</p>
                            <div className='flex w-full justify-center items-center space-x-2 bg-slate-200 rounded-md'>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaMinus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                                <p className='flex justify-center items-center'>14</p>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaPlus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                            </div>
                            <p className='flex justify-center items-center'>$24.95</p>
                            <div className='flex w-full justify-center items-center'>
                                <div className='flex w-8 h-8 p-1 px-2 rounded-md border-2 border-red-500 bg-red-600 justify-center text-center items-center text-white'>
                                    <FaTrash />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 w-full py-2 border-b'>
                            <p className='flex justify-center items-center text-sm text-center'>Product name</p>
                            <div className='flex w-full justify-center items-center space-x-2 bg-slate-200 rounded-md'>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaMinus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                                <p className='flex justify-center items-center'>14</p>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaPlus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                            </div>
                            <p className='flex justify-center items-center'>$24.95</p>
                            <div className='flex w-full justify-center items-center'>
                                <div className='flex w-8 h-8 p-1 px-2 rounded-md border-2 border-red-500 bg-red-600 justify-center text-center items-center text-white'>
                                    <FaTrash />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 w-full py-2 border-b'>
                            <p className='flex justify-center items-center text-sm text-center'>Product name</p>
                            <div className='flex w-full justify-center items-center space-x-2 bg-slate-200 rounded-md'>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaMinus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                                <p className='flex justify-center items-center'>14</p>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaPlus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                            </div>
                            <p className='flex justify-center items-center'>$24.95</p>
                            <div className='flex w-full justify-center items-center'>
                                <div className='flex w-8 h-8 p-1 px-2 rounded-md border-2 border-red-500 bg-red-600 justify-center text-center items-center text-white'>
                                    <FaTrash />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 w-full py-2 border-b'>
                            <p className='flex justify-center items-center text-sm text-center'>Product name</p>
                            <div className='flex w-full justify-center items-center space-x-2 bg-slate-200 rounded-md'>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaMinus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                                <p className='flex justify-center items-center'>14</p>
                                <div className='flex justify-center items-center font-bold text-xl w-4 h-4 bg-slate-500 rounded-sm'>
                                    <FaPlus fontSize={"small"} style={{ color: "#ffffff" }} />
                                </div>
                            </div>
                            <p className='flex justify-center items-center'>$24.95</p>
                            <div className='flex w-full justify-center items-center'>
                                <div className='flex w-8 h-8 p-1 px-2 rounded-md border-2 border-red-500 bg-red-600 justify-center text-center items-center text-white'>
                                    <FaTrash />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >)
}

export default POS

// <div className='flex flex-col items-center w-fullborder-2 border-slate-200 gap-2'>
// {backendData.products && (
//     backendData.products.map((product, index, key, t, p, i) => (
//         <div key={index} className='flex flex-col w-full bg-slate-100 border-2 border-sky-200 rounded-md p-4'>
//             <div key={key} className='flex w-full justify-between'>
//                 <p
//                     key={t}
//                     className='text-lg text-slate-900 font-medium'
//                 >
//                     {product.title}
//                 </p>
//                 <div key={p} className='font-bold'>{product.price}</div>
//             </div>
//             <div key={i} className='inline-grid grid-cols-2 gap-2 mt-4'>
//                 {product.ingredients.map((ingredient, n) => (
//                     <p key={n} className='text-sm text-slate-800 p-2 bg-sky-100 border rounded-sm'>{product.ingredients[n]}</p>
//                 ))}
//             </div>

//         </div>
//     ))
// )}
// </div>