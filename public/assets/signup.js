        // Toggle password visibility
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon
            this.innerHTML = type === 'password' ? '<i class=\'bx bx-show text-xl\'></i>' : '<i class=\'bx bx-hide text-xl\'></i>';
        });

        // Form submission
        const signupForm = document.getElementById('signupForm');
        const notification = document.getElementById('notification');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const btnLoader = document.getElementById('btnLoader');
        
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const fname = document.getElementById('fname').value;
            const username = document.getElementById('username').value;
            const remember = document.getElementById('remember').checked;
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'Authenticating...';
            btnLoader.classList.remove('hidden');
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Prepare signup data
            const signupData = {
                email: email,
                password: password,
                fullname:fname,
                username:username,
                remember: remember,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };
            
            // In a real app, send this data to your backend
            console.log('signup data to be sent:', signupData);
            
            // Reset button state
            submitBtn.disabled = false;
            btnText.textContent = 'Access Portal';
            btnLoader.classList.add('hidden');
            
            // Show notification
            notification.classList.remove('translate-x-full');
            
            // Hide notification after 5 seconds
            setTimeout(() => {
                notification.classList.add('translate-x-full');
            }, 5000);
            
            // Reset form
            signupForm.reset();
            setTimeout(()=>{
                window.location = '/auth/login.html'
            },00)
        });

        // Add input focus effects
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('animate__animated', 'animate__pulse');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('animate__animated', 'animate__pulse');
            });
        });

        // Add hover effect to social buttons
        const socialBtns = document.querySelectorAll('.social-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.classList.add('animate__animated', 'animate__pulse');
            });
            
            btn.addEventListener('mouseleave', function() {
                this.classList.remove('animate__animated', 'animate__pulse');
            });
        });
	//redirect to login
		const logo = document.querySelector("#logo");
        logo.addEventListener('click', ()=>{
            window.location = 'https://fury-nexus-challenge.vercel.app/';
        })
