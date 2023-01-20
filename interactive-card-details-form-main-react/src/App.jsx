import React from 'react';
import { label, input, section } from './style';

const App = () => {
	return (
		<div className='container'>
			<div className=' grid grid-cols-4'>
				<div className='bg-desktop h-screen w-screen text-white relative'>
					<div className='cards'>
						<div className='card-front shadow-2xl border-r border-b border-b-slate-400 border-r-slate-300 rounded-[9px]  w-[25.5em] h-[14em] absolute top-[7em] left-[5em] p-5'>
							<div className='select flex gap-3 items-center'>
								<div className='rounded-full bg-white w-12 h-12'></div>
								<div className='rounded-full border border-white w-7 h-7'></div>
							</div>
							<div className='card-info mt-[4em]'>
								<div className='card-number-info'>
									<h1 className='card-number font-[500] text-[18px]'>
										0000 0000 0000 0000
									</h1>
								</div>
								<div className='card-holder flex justify-between mt-4'>
									<p>JANE APPLESEED</p>
									<p>00/00</p>
								</div>
							</div>
						</div>

						<div className='card-back shadow-2xl border-r border-b border-b-slate-400 border-r-slate-300 rounded-[9px] w-[25.5em] h-[14em] absolute top-[23em] left-[10.5em] p-5'>
							<h2 className='flex-row-reverse flex mt-[4.8em] mr-6 '>
								000
							</h2>
						</div>
					</div>
				</div>
				<div className='w-full border col-span-3 flex justify-center items-center'>
					<form
						action='/'
						method='post'>
						<div className={section}>
							<label
								className={label}
								for='cardHolderName'>
								CARD HOLDER NAME
							</label>
							<input
								className={input}
								name='cardHolderName'
								id='cardHolderName'
								type='text'
								placeholder='  e.g. Jane Appleseed'
							/>
						</div>

						<div className={section}>
							<label
								className={label}
								for='cardNumber'>
								CARD NUMBER
							</label>
							<input
								className={input}
								name='cardNumber'
								id='cardNumber'
								type='text'
								placeholder='  e.g. 1234 5678 9123 0000'
							/>
						</div>

						<div className={`${section} flex`}>
							<div class='exp'>
								<label
									className={label}
									for='exp'>
									Exp. Date (MM/YY)
								</label>
								<input
									className='w-20 border rounded-lg px-3 py-1'
									name='expMonth'
									id='expMonth'
									type='text'
									placeholder='MM'
								/>
								<input
									className='w-20 border rounded-lg px-3 py-1 ml-2'
									name='expYear'
									id='expYear'
									type='text'
									placeholder='YY'
								/>
							</div>

							<div className=''>
								<label
									className={label}
									for='cvc'>
									CVC
								</label>
								<input
									className='w-40 border rounded-lg px-3 py-1 '
									name='cvc'
									id='cvc'
									type=''
									placeholder='e.g 123'
								/>
							</div>
						</div>

						<div class={section}>
							<input
								className='w-full bg-purple-900 text-white py-1 rounded-md'
								type='button'
								value='Confirm'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default App;
