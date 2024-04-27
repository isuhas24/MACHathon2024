import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
 
const Payment = () => {
 
    const [shippingAddress, setShippingAddress] = useState({
        floor: '',
        building: '',
        door: '',
        city: '',
        country: ''
    });
   
    const [paymentAccordionOpen, setPaymentAccordionOpen] = useState(false);
    const [AddressAccordionOpen, setAddressAccordionOpen] = useState(true);
    const anonymousId = localStorage.getItem('anonymousId');
 
    const handleShippingAddressSubmit = (e) => {
        e.preventDefault();
        console.log(shippingAddress)
        console.log(anonymousId)
        axios.post('http://localhost:8080/shippingAddress/addAddress', shippingAddress, {
        params: {
            anonymousId: anonymousId
        }
    })
    .then(response => {
        // Handle response if needed
        console.log('Shipping Address Added:', response.data);
        toast.success('Address saved successfully');
        setPaymentAccordionOpen(true);
        setAddressAccordionOpen(false);
    })
    .catch(error => {
        // Handle error if needed
        console.error('Error adding Shipping Address:', error);
    });
    }
        const handleInputChange = (e) => {
            const { id, value } = e.target;
            setShippingAddress(prevState => ({
                ...prevState,
                [id]: value
            }));
        };
    return(
        <>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Shipping Address
                    </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse ${AddressAccordionOpen ? 'show' : ''}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <form onSubmit={handleShippingAddressSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="door">Door No:</label>
                                    <input type="string" className="form-control" id="door" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address line 1 :Floor</label>
                                    <input type="string" className="form-control" id="floor" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress2">Building</label>
                                    <input type="string" className="form-control" id="building" onChange={handleInputChange} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">City</label>
                                        <input type="string" className="form-control" id="city" onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Country</label>
                                        <input type="string" className="form-control" id="country" onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input type="string" className="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-success">save</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Payment
                    </button>
                    </h2>

                    <div id="collapseTwo" className={`accordion-collapse collapse ${paymentAccordionOpen ? 'show' : ''}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Cash on Delivery
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Pay with Card (Stripe)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    )
}
 
export default Payment;