// Payment Popup for Nowsite Integration
(function() {
    // Create and inject CSS
    const style = document.createElement('style');
    style.textContent = `
        #paymentPopupOverlay {
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: 999998;
        }

        #paymentPopupBox {
            background: white;
            width: 90%;
            max-width: 450px;
            margin: 80px auto;
            padding: 0;
            border-radius: 12px;
            text-align: center;
            position: relative;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            overflow: hidden;
        }

        .payment-closeBtn {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 24px;
            cursor: pointer;
            color: white;
            z-index: 10;
            background: rgba(0,0,0,0.3);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
        }

        .payment-closeBtn:hover {
            background: rgba(0,0,0,0.5);
        }

        .payment-popup-header {
            position: relative;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .payment-popup-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 4px solid white;
            object-fit: cover;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .payment-popup-content {
            padding: 30px;
            line-height: 1.8;
        }

        .payment-popup-content h2 {
            margin: 0 0 20px 0;
            color: #333;
            font-size: 1.8em;
            font-weight: 600;
            line-height: 1.3;
        }

        .payment-popup-content p {
            margin: 0 0 25px 0;
            color: #666;
            line-height: 1.7;
        }

        .payment-price {
            font-size: 1.4em;
            font-weight: 600;
            color: #333;
            margin: 25px 0 30px 0 !important;
        }

        .payment-stripeBtn {
            padding: 15px 30px;
            font-size: 16px;
            background-color: #635bff;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.2s;
            width: 100%;
            max-width: 250px;
            text-decoration: none;
            display: inline-block;
        }

        .payment-stripeBtn:hover {
            background-color: #5848e8;
        }

        .payment-note {
            font-size: 13px;
            color: #888;
            margin-top: 20px;
        }

        @media (max-width: 480px) {
            #paymentPopupBox {
                width: 95%;
                margin: 50px auto;
            }
            .payment-popup-header {
                height: 160px;
            }
            .payment-popup-image {
                width: 100px;
                height: 100px;
            }
        }
    `;
    document.head.appendChild(style);

    // Create and inject HTML
    const popupHTML = `
        <div id="paymentPopupOverlay">
            <div id="paymentPopupBox">
                <button class="payment-closeBtn" onclick="window.closePaymentPopup()">&times;</button>
                
                <div class="payment-popup-header">
                    <img src="https://metamorphosis-tms.github.io/wwc-pop-up/wwclogo.png" 
                         alt="Wise Women Crypto Logo" 
                         class="payment-popup-image">
                </div>
                
                <div class="payment-popup-content">
                    <h2>Confidence Builder</h2>
                    <p>Step by Step easy guide so you can learn and get started on your cryptocurrency and blockchain journey.</p>
                    
                    <p class="payment-price">ONLY $27USD.</p>
                    
                    <a href="https://buy.stripe.com/cNifZg20K1NpcUTbT82ZO09" target="_blank" rel="noopener noreferrer">
                        <button class="payment-stripeBtn">Pay Now with Stripe</button>
                    </a>
                    
                    <p class="payment-note">Payments are processed securely by Stripe.</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Functions
    window.showPaymentPopup = function() {
        document.getElementById("paymentPopupOverlay").style.display = "block";
    };

    window.closePaymentPopup = function() {
        document.getElementById("paymentPopupOverlay").style.display = "none";
    };

    // Event listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Allow close when clicking outside the popup box
        document.getElementById("paymentPopupOverlay").addEventListener('click', function(event) {
            if (event.target === this) {
                window.closePaymentPopup();
            }
        });
    });

})();
