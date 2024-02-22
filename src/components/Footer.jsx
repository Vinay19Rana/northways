import React from 'react'
import Logo from './Header/Logo'
import { address, email, mapLoaction, phone } from '../Constants';

const Footer = () => {
    return (
        <footer class="bg-[#dadada] pt-10">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex gap-20">
                    <div class="mb-6 md:mb-0 w-[100%] lg:w-[50%]">
                        <Logo type='long' />
                        <p className='text-gray-500 font-medium mt-5 mr-10 '>
                            THE PHILOSOPHY OF THE FIRM IS TO PROVIDE COMPETENT, ETHICAL LEGAL SERVICES AT REASONABLE FEES, AND TO REPRESENT THE CLIENT TO THE FULLEST EXTENT POSSIBLE, ALWAYS OPERATING WITHIN APPROPRIATE RULES AND REGULATIONS AND SHOWING RESPECT FOR THE CLIENTS. OUR EXTENSIVE KNOWLEDGE AND VAST EXPERIENCE IN GENERAL IMMIGRATION, BUSINESS IMMIGRATION IS SECOND TO NONE.
                        </p>
                    </div>
                    <div class="flex md:gap-10 lg:gap-20">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Contact Us</h2>
                            <ul class="text-gray-500  font-medium">
                                <li class="mb-4">
                                    <span>Address:</span><br />
                                    <a href={mapLoaction} className='text-black font-medium hover:underline'>{address}</a>
                                </li>
                                <li>
                                    <span>Phone: </span>
                                    <a href={`tel:${phone}`} className='text-black font-medium hover:underline'>{`+91-${phone}`}</a>
                                </li>
                                <li>
                                    <span>Email: </span>
                                    <a href={`mailto:${email}`} className='text-black font-medium hover:underline'>{email}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                            <ul class="text-gray-500  font-medium">
                                <li class="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <div class="text-center">
                    <span class="text-sm text-gray-500 ">© 2024 <span class="hover:underline">Northway Immigrations.</span>
                        <p> All Rights Reserved.
                        </p>
                    </span>

                </div>
            </div>
        </footer>
    )
}

export default Footer