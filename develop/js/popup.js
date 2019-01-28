(function() {

	function Popup(popObj) {

			var popupBack = document.createElement('div');
			var popupFront = document.createElement('div');
			var popupBtnClose = document.createElement('button');

			this.popupBackClass = popObj.popupBackClass;
			this.popupFrontClass = popObj.popupFrontClass;
			this.popupBtnClose = popObj.popupBtnClose;

			popupBack.classList.add(this.popupBackClass);
			popupFront.classList.add(this.popupFrontClass);
			popupBtnClose.classList.add(this.popupBtnClose);

			var pBack = document.body.appendChild(popupBack);
			var pFront = document.body.appendChild(popupFront);
			var pBtnClose = document.body.appendChild(popupBtnClose);


			this.openPopup = function(popContent) {

				pBack.classList.add('popup--show');
				pFront.classList.add('popup--show');
				pBtnClose.classList.add('popup--show');

				pFront.innerHTML = popContent;
			};			

			this.closePopup = function() {

				popupBack.addEventListener('click', function() {
					pBack.classList.remove('popup--show');
					pFront.classList.remove('popup--show');
					pBtnClose.classList.remove('popup--show');
				});

				pBtnClose.addEventListener('click', function() {
					pBack.classList.remove('popup--show');
					pFront.classList.remove('popup--show');
					pBtnClose.classList.remove('popup--show');
				}); 
			};

			this.closePopup();
	};


	//____________________Log-In
	var p1 = new Popup({
		popupBackClass: 'popup__login-back',
		popupFrontClass: 'popup__login-front',
		popupBtnClose: 'popup__login-btn--close'
	});	

	var btnLogin = document.querySelector('.btn-login');
	
	btnLogin.addEventListener('click', function() {
		var myContent = document.querySelector('.popup__login');
		p1.openPopup(myContent.innerHTML);
	});

	//____________________Sing-Up
	var p2 = new Popup({
		popupBackClass: 'popup__signup-back',
		popupFrontClass: 'popup__signup-front',
		popupBtnClose: 'popup__signup-btn--close'
	});

	var btnSignup = document.querySelector('.btn-signup');
	
	btnSignup.addEventListener('click', function() {
		var myContent = document.querySelector('.popup__signup');
		p2.openPopup(myContent.innerHTML);
	});


})();