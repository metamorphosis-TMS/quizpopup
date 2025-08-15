// Crypto Quiz Popup for Nowsite Integration
(function() {
    // Create and inject CSS
    const style = document.createElement('style');
    style.textContent = `
        .quiz-popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 999999;
            backdrop-filter: blur(5px);
        }

        .quiz-popup-container {
            background: white;
            border-radius: 20px;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: quizSlideIn 0.4s ease-out;
        }

        @keyframes quizSlideIn {
            from { opacity: 0; transform: scale(0.8) translateY(-20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .quiz-popup-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 20px 20px 0 0;
        }

        .quiz-popup-title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .quiz-popup-subtitle {
            font-size: 16px;
            opacity: 0.95;
            line-height: 1.5;
        }

        .quiz-popup-content {
            padding: 40px 30px;
        }

        .quiz-form {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .quiz-form-group {
            display: flex;
            flex-direction: column;
        }

        .quiz-form-label {
            font-weight: 600;
            margin-bottom: 15px;
            color: #333;
            font-size: 16px;
        }

        .quiz-radio-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .quiz-radio-option {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: #fafafa;
        }

        .quiz-radio-option:hover {
            border-color: #667eea;
            background: #f8f9ff;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
        }

        .quiz-radio-option input[type="radio"] {
            margin: 0;
            accent-color: #667eea;
        }

        .quiz-radio-text {
            flex: 1;
            font-size: 14px;
            line-height: 1.4;
            color: #555;
        }

        .quiz-input-field {
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            font-size: 16px;
            transition: all 0.3s ease;
            background: #fafafa;
        }

        .quiz-input-field:focus {
            outline: none;
            border-color: #667eea;
            background: white;
            box-shadow: 0 0 15px rgba(102, 126, 234, 0.2);
        }

        .quiz-learn-more-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 18px 40px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .quiz-learn-more-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .quiz-close-btn {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 30px;
            color: white;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .quiz-close-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(90deg);
        }

        .quiz-form-footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #888;
        }

        @media (max-width: 600px) {
            .quiz-popup-container { width: 95%; margin: 10px; }
            .quiz-popup-header { padding: 20px; }
            .quiz-popup-title { font-size: 24px; }
            .quiz-popup-content { padding: 30px 20px; }
        }
    `;
    document.head.appendChild(style);

    // Create and inject HTML
    const popupHTML = `
        <div class="quiz-popup-overlay" id="cryptoQuizPopup">
            <div class="quiz-popup-container">
                <button class="quiz-close-btn" onclick="window.closeCryptoQuiz()">&times;</button>
                
                <div class="quiz-popup-header">
                    <h1 class="quiz-popup-title">TAKE THE QUICK QUIZ</h1>
                    <p class="quiz-popup-subtitle">
                        Welcome to your crypto adventure! Whether you're just starting out or already experienced, 
                        we're here to help you grow. Share where you are in your journey so we can offer the right support for you.
                    </p>
                </div>
                
                <div class="quiz-popup-content">
                    <form class="quiz-form" id="cryptoQuizForm">
                        <div class="quiz-form-group">
                            <label class="quiz-form-label">Where are you in your crypto journey?</label>
                            <div class="quiz-radio-group">
                                <label class="quiz-radio-option">
                                    <input type="radio" name="cryptoStage" value="thinking" required>
                                    <span class="quiz-radio-text">
                                        <strong>Thinking about it</strong> - everyone else is birthing themselves into the crypto and blockchain, maybe I need to
                                    </span>
                                </label>
                                
                                <label class="quiz-radio-option">
                                    <input type="radio" name="cryptoStage" value="newborn" required>
                                    <span class="quiz-radio-text">
                                        <strong>Newborn stage</strong> - everything is new, needs constant guidance and sleepless learning nights
                                    </span>
                                </label>
                                
                                <label class="quiz-radio-option">
                                    <input type="radio" name="cryptoStage" value="toddler" required>
                                    <span class="quiz-radio-text">
                                        <strong>Toddler phase</strong> - taking first wobbly steps, curious but need hand-holding
                                    </span>
                                </label>
                                
                                <label class="quiz-radio-option">
                                    <input type="radio" name="cryptoStage" value="school-age" required>
                                    <span class="quiz-radio-text">
                                        <strong>School age</strong> - asking lots of questions, eager to learn and growing fast
                                    </span>
                                </label>
                                
                                <label class="quiz-radio-option">
                                    <input type="radio" name="cryptoStage" value="teenager" required>
                                    <span class="quiz-radio-text">
                                        <strong>Teenager years</strong> - more independent, making some decisions but still need mentoring
                                    </span>
                                </label>
                                
                                <label class="quiz-radio-option">
                                    <input type="radio" name="cryptoStage" value="young-adult" required>
                                    <span class="quiz-radio-text">
                                        <strong>Young adult</strong> - confident, educated, and ready to make my own wise financial choices
                                    </span>
                                </label>
                                
                                <label class="quiz-radio-option">
                                    <input type="radio" name="cryptoStage" value="wise-woman" required>
                                    <span class="quiz-radio-text">
                                        <strong>Wise Woman</strong> - I'm looking for opportunities to expand my portfolio
                                    </span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="quiz-form-group">
                            <label class="quiz-form-label" for="quizUserName">Name</label>
                            <input type="text" id="quizUserName" name="name" class="quiz-input-field" required placeholder="Your full name">
                        </div>
                        
                        <div class="quiz-form-group">
                            <label class="quiz-form-label" for="quizUserEmail">Email</label>
                            <input type="email" id="quizUserEmail" name="email" class="quiz-input-field" required placeholder="your@email.com">
                        </div>
                        
                        <div class="quiz-form-group">
                            <label class="quiz-form-label" for="quizReferral">Who introduced you to this site? (We'd love to thank them!)</label>
                            <input type="text" id="quizReferral" name="referral" class="quiz-input-field" placeholder="Friend's name, social media, search engine, etc. (optional)">
                        </div>
                        
                        <button type="submit" class="quiz-learn-more-btn">Learn More</button>
                        
                        <div class="quiz-form-footer">
                            We respect your privacy and will never spam you. 
                            You can unsubscribe at any time.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Global variables
    let cryptoQuizSeen = false;
    let paymentPopupTriggered = false;

    // Functions
    window.showCryptoQuiz = function() {
        document.getElementById('cryptoQuizPopup').style.display = 'flex';
    };

    window.closeCryptoQuiz = function() {
        document.getElementById('cryptoQuizPopup').style.display = 'none';
        cryptoQuizSeen = true;
        setupPaymentTrigger();
    };

    function setupPaymentTrigger() {
        let hasTriggered = false;
        
        window.addEventListener('scroll', function() {
            const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercentage > 50 && cryptoQuizSeen && !hasTriggered) {
                hasTriggered = true;
                setTimeout(() => {
                    triggerPaymentPopup();
                }, 2000);
            }
        });
    }

    function triggerPaymentPopup() {
        // Trigger your existing payment popup or open in new window
        if (typeof showPaymentPopup === 'function') {
            showPaymentPopup();
        } else {
            window.open('https://metamorphosis-tms.github.io/wwc-pop-up/', '_blank');
        }
    }

    function submitToNowaiteEmail(data) {
        const emailData = {
            email: data.email,
            name: data.name,
            tags: ['crypto-quiz', data.cryptoStage],
            custom_fields: {
                crypto_stage: data.cryptoStage,
                referral_source: data.referral || 'Not specified',
                source: 'crypto-quiz-popup'
            }
        };
        
        // Try different nowsite integration methods
        if (window.nowsite && window.nowsite.email) {
            window.nowsite.email.subscribe(emailData)
                .then(() => showQuizSuccess())
                .catch(() => showQuizSuccess());
        } else if (window.royaltie && window.royaltie.email) {
            window.royaltie.email.subscribe(emailData)
                .then(() => showQuizSuccess())
                .catch(() => showQuizSuccess());
        } else {
            // Fallback: send to your email endpoint
            fetch('/email-subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailData)
            })
            .then(() => showQuizSuccess())
            .catch(() => showQuizSuccess());
        }
    }

    function showQuizSuccess() {
        alert('Thanks for taking the quiz! Keep reading to learn about building your crypto confidence.');
    }

    // Event listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Handle quiz form submission
        document.getElementById('cryptoQuizForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            submitToNowaiteEmail(data);
            window.closeCryptoQuiz();
        });

        // Close quiz when clicking outside
        document.getElementById('cryptoQuizPopup').addEventListener('click', function(e) {
            if (e.target === this) window.closeCryptoQuiz();
        });

        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') window.closeCryptoQuiz();
        });

        // Show quiz popup after delay
        setTimeout(() => {
            window.showCryptoQuiz();
        }, 3000);
    });

})();
