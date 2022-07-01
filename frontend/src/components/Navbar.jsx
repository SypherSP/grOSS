import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
		<>
			<nav className='navbar navbar-expand-md navbar-dark fixed-top' style={{backgroundColor: "#161b22"}}>
				<div className='container'>
					<Link to='/' className='navbar-brand'>
						Vulnfinder
						<i className='fab fa-typo3' />
					</Link>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <ul className='navbar-nav ms-auto'>
							<li className="nav-item">
								<Link to='/' className='nav-link'>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to='/search' className='nav-link'>
									Search
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
