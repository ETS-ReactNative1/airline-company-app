import { useState } from 'react';

import airTransport from '../../assets/air-transport.png';

import useRedeems from '../../hooks/useRedeems.js';
import useUser from '../../hooks/useUser.js';

function Checkout({completionState}) {
  const [redeem, setRedeem] = useState('');
  const [redeems, addRedeem] = useRedeems();
  const [user, ] = useUser();

  function handleChangeRedeem({target}) {
    setRedeem(target.value);
  }

  function handleSubmitRedeem(e) {
    e.preventDefault();
    if (redeem) {
      addRedeem(redeem);
      setRedeem('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    completionState();
  }

  function getTotal() {
    const totalWithoutDiscount = Object.values(user.flights).map(f => f.price).reduce((p, c) => (p + c), 0);
    const totalDiscount = redeems.map(r => r.discount).reduce((p, c) => (p + c), 0);
    return Math.max(totalWithoutDiscount - totalDiscount, 0);
  }

  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <div className='container pb-5'>
      <main>
        <div className='py-5 text-center'>
          <img className='d-block mx-auto mb-4' src={airTransport} alt='' width='72' height='72'/>
          <h2>Time to pay</h2>
          <p className='lead'>We won't use your credentials for anything worse than you're already doing.</p>
        </div>

        <div className='row g-5'>
          <div className='col-md-5 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-primary'>Your cart</span>
              <span className='badge bg-primary rounded-pill'>3</span>
            </h4>
            <ul className='list-group mb-3'>
              {Object.values(user.flights).map((flight, i) => (
                <li key={`flight-${i}`} className='list-group-item d-flex justify-content-between lh-sm'>
                  <div>
                    <h6 className='my-0'>{`${flight.from} - ${flight.from}`}</h6>
                    <small className='text-muted'>{flight.departure.toLocaleDateString(undefined, options)}</small>
                  </div>
                  <span className='text-muted'>{`$${flight.price}`}</span>
                </li>
              ))}
              {redeems.map((r, i) => (
                <li key={`redeem-${i}`} className='list-group-item d-flex justify-content-between bg-light'>
                  <div className='text-success'>
                    <h6 className='my-0'>Promo code</h6>
                    <small>{r.code}</small>
                  </div>
                  <span className='text-success'>{`-$${r.discount}`}</span>
                </li>
              ))
              }
              <li className='list-group-item d-flex justify-content-between'>
                <span>Total (USD)</span>
                <strong>${getTotal()}</strong>
              </li>
            </ul>

            <form onSubmit={handleSubmitRedeem} className='card p-2'>
              <div className='input-group'>
                <input value={redeem} onChange={handleChangeRedeem} type='text' className='form-control' placeholder='Promo code'/>
                <button type='submit' className='btn btn-secondary'>Redeem</button>
              </div>
            </form>
          </div>
          <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>Billing address</h4>
            <form onSubmit={handleSubmit}>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='firstName' className='form-label'>First name</label>
                  <input type='text' className='form-control' id='firstName' placeholder='' defaultValue='' required=''/>
                  <div className='invalid-feedback'>
                    Valid first name is required.
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='lastName' className='form-label'>Last name</label>
                  <input type='text' className='form-control' id='lastName' placeholder='' defaultValue='' required=''/>
                  <div className='invalid-feedback'>
                    Valid last name is required.
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='username' className='form-label'>Username</label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>@</span>
                    <input type='text' className='form-control' id='username' placeholder='Username' required=''/>
                  <div className='invalid-feedback'>
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='email' className='form-label'>Email <span className='text-muted'>(Optional)</span></label>
                  <input type='email' className='form-control' id='email' placeholder='you@example.com'/>
                  <div className='invalid-feedback'>
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='address' className='form-label'>Address</label>
                  <input type='text' className='form-control' id='address' placeholder='1234 Main St' required=''/>
                  <div className='invalid-feedback'>
                    Please enter your shipping address.
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='address2' className='form-label'>Address 2 <span className='text-muted'>(Optional)</span></label>
                  <input type='text' className='form-control' id='address2' placeholder='Apartment or suite'/>
                </div>

                <div className='col-md-5'>
                  <label htmlFor='country' className='form-label'>Country</label>
                  <select className='form-select' id='country' required=''>
                    <option defaultValue=''>Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid country.
                  </div>
                </div>

                <div className='col-md-4'>
                  <label htmlFor='state' className='form-label'>State</label>
                  <select className='form-select' id='state' required=''>
                    <option defaultValue=''>Choose...</option>
                    <option>California</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please provide a valid state.
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='zip' className='form-label'>Zip</label>
                  <input type='text' className='form-control' id='zip' placeholder='' required=''/>
                  <div className='invalid-feedback'>
                    Zip code required.
                  </div>
                </div>
              </div>

              <hr className='my-4'/>

              <div className='form-check'>
                <input type='checkbox' className='form-check-input' id='save-info'/>
                <label className='form-check-label' htmlFor='save-info'>Save this information for next time</label>
              </div>

              <hr className='my-4'/>

              <h4 className='mb-3'>Payment</h4>

              <div className='row gy-3'>
                <div className='col-md-6'>
                  <label htmlFor='cc-name' className='form-label'>Name on card</label>
                  <input type='text' className='form-control' id='cc-name' placeholder='' required=''/>
                  <small className='text-muted'>Full name as displayed on card</small>
                  <div className='invalid-feedback'>
                    Name on card is required
                  </div>
                </div>

                <div className='col-md-6'>
                  <label htmlFor='cc-number' className='form-label'>Credit card number</label>
                  <input type='text' className='form-control' id='cc-number' placeholder='' required=''/>
                  <div className='invalid-feedback'>
                    Credit card number is required
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='cc-expiration' className='form-label'>Expiration</label>
                  <input type='text' className='form-control' id='cc-expiration' placeholder='' required=''/>
                  <div className='invalid-feedback'>
                    Expiration date required
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='cc-cvv' className='form-label'>CVV</label>
                  <input type='text' className='form-control' id='cc-cvv' placeholder='' required=''/>
                  <div className='invalid-feedback'>
                    Security code required
                  </div>
                </div>
              </div>
              <hr className='my-4'/>

              <button className='w-100 btn btn-primary btn-lg' type='submit'>Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Checkout;
