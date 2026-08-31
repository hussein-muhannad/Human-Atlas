document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // THEME - DARK / LIGHT MODE
    // ==========================================

    const themeButton = document.getElementById("themeButton");

    function updateThemeButton() {

        if (!themeButton) return;

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "🌙";
            themeButton.title = "Light Mode";
        } else {
            themeButton.textContent = "☀️";
            themeButton.title = "Dark Mode";
        }
    }

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    updateThemeButton();

    // Theme button
    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            updateThemeButton();
        });
    }


    // ==========================================
    // LANGUAGE
    // ==========================================

    const languageSelect =
        document.getElementById("languageSelect");

    const savedLanguage =
        localStorage.getItem("language") || "en";

    if (languageSelect) {

        languageSelect.value = savedLanguage;

        changeLanguage(savedLanguage);

        languageSelect.addEventListener("change", function () {

            const language = this.value;

            localStorage.setItem("language", language);

            changeLanguage(language);
        });
    }

});


// ==========================================
// LANGUAGE FUNCTION
// ==========================================

function changeLanguage(language) {

    document.documentElement.lang = language;

    if (language === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }


    // ==========================================
    // WELCOME / INDEX PAGE
    // ==========================================

    const welcomeText =
        document.getElementById("welcomeText");

    const siteTitle =
        document.getElementById("siteTitle");

    const mainTitle =
        document.getElementById("mainTitle");

    const description =
        document.getElementById("description");

    const startButton =
        document.getElementById("startButton");

    const developer =
        document.getElementById("developer");


    if (welcomeText) {

        if (language === "ar") {

            welcomeText.textContent =
                "مرحباً بك في";

            siteTitle.innerHTML =
                'أطلس <span>الإنسان</span>';

            mainTitle.textContent =
                "اكتشف جسم الإنسان";

            description.textContent =
                "اكتشف جسم الإنسان بطريقة بسيطة وتعليمية. تعرف على الأعضاء ووظائفها ومواقعها والأمراض الشائعة وطرق الوقاية منها.";

            startButton.innerHTML =
                'ابدأ الاستكشاف <span>←</span>';

            developer.innerHTML =
                'تم تطوير الموقع بواسطة <strong>حسين مهند</strong>';

        } else {

            welcomeText.textContent =
                "WELCOME TO";

            siteTitle.innerHTML =
                'Human <span>Atlas</span>';

            mainTitle.textContent =
                "Explore the Human Body";

            description.textContent =
                "Discover the human body in a simple and educational way. Learn about organs, their functions, locations, common diseases, and ways to protect your health.";

            startButton.innerHTML =
                'Start Exploring <span>→</span>';

            developer.innerHTML =
                'Developed by <strong>Hussein Muhannad</strong>';
        }
    }


    // ==========================================
    // HOME PAGE - ORGANS
    // ==========================================

    const homeTitle =
        document.getElementById("title");

    const subtitle =
        document.getElementById("subtitle");

    const searchInput =
        document.getElementById("searchInput");


    if (homeTitle) {

        const cards =
            document.querySelectorAll(".card");


        const englishNames = [
            "Heart",
            "Brain",
            "Lungs",
            "Liver",
            "Kidneys",
            "Stomach",
            "Eye",
            "Ear",
            "Nose",
            "Teeth",
            "Bones",
            "Muscles"
        ];


        const arabicNames = [
            "القلب",
            "الدماغ",
            "الرئتان",
            "الكبد",
            "الكليتان",
            "المعدة",
            "العين",
            "الأذن",
            "الأنف",
            "الأسنان",
            "العظام",
            "العضلات"
        ];


        cards.forEach(function (card, index) {

            if (!englishNames[index]) return;

            card.dataset.en =
                englishNames[index].toLowerCase();

            card.dataset.ar =
                arabicNames[index];


            const name =
                card.querySelector("h3");


            if (name) {

                if (language === "ar") {
                    name.textContent =
                        arabicNames[index];
                } else {
                    name.textContent =
                        englishNames[index];
                }
            }
        });


        if (language === "ar") {

            homeTitle.textContent =
                "أعضاء جسم الإنسان";

            subtitle.textContent =
                "اختر عضوًا للتعرف على وظيفته وموقعه والأمراض التي قد تصيبه وطرق الوقاية منها.";

            if (searchInput) {
                searchInput.placeholder =
                    "ابحث عن عضو...";
            }

        } else {

            homeTitle.textContent =
                "Human Body Organs";

            subtitle.textContent =
                "Select an organ to discover information about its function, location, diseases, and prevention.";

            if (searchInput) {
                searchInput.placeholder =
                    "Search for an organ...";
            }
        }
    }


    // ==========================================
    // ORGAN PAGES
    // ==========================================

    const organTitle =
        document.getElementById("organTitle");


    if (organTitle) {

        // Get the organ name from the HTML title
        const currentOrgan =
            organTitle.textContent.trim().toLowerCase();


        // ==========================================
        // ALL ORGAN INFORMATION
        // ==========================================

        const organs = {

            heart: {

                en: {
                    name: "Heart",

                    intro: "The heart is a muscular organ that pumps blood throughout the body.",

                    location: "The heart is located in the chest between the lungs, slightly to the left of the center.",

                    function: "The heart pumps oxygen-rich blood to the body and sends oxygen-poor blood to the lungs.",

                    diseases: "Common heart diseases include coronary artery disease, heart failure, arrhythmia, and heart valve disease.",

                    prevention: "Heart health can be protected by exercising regularly, eating a balanced diet, avoiding smoking, maintaining a healthy weight, and controlling blood pressure.",

                    fact: "The human heart beats approximately 100,000 times each day.",

                    sources: "National Heart, Lung, and Blood Institute (NHLBI)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "القلب",

                    intro: "القلب عضو عضلي يقوم بضخ الدم إلى جميع أنحاء الجسم.",

                    location: "يقع القلب داخل الصدر بين الرئتين، ويميل قليلاً إلى الجهة اليسرى من منتصف الصدر.",

                    function: "يضخ القلب الدم الغني بالأكسجين إلى الجسم ويرسل الدم الفقير بالأكسجين إلى الرئتين.",

                    diseases: "تشمل أمراض القلب الشائعة مرض الشريان التاجي، وفشل القلب، واضطراب نظم القلب، وأمراض صمامات القلب.",

                    prevention: "يمكن الحفاظ على صحة القلب من خلال ممارسة الرياضة بانتظام، وتناول غذاء متوازن، وتجنب التدخين، والحفاظ على وزن صحي والسيطرة على ضغط الدم.",

                    fact: "ينبض قلب الإنسان حوالي 100,000 مرة يومياً.",

                    sources: "المعهد الوطني للقلب والرئة والدم (NHLBI)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            brain: {

                en: {
                    name: "Brain",

                    intro: "The brain is the control center of the nervous system and manages many activities of the body.",

                    location: "The brain is located inside the skull and is protected by the bones of the skull.",

                    function: "The brain controls movement, thoughts, memory, emotions, senses, breathing, and many other body functions.",

                    diseases: "Common brain disorders include stroke, epilepsy, Alzheimer's disease, Parkinson's disease, and brain tumors.",

                    prevention: "Brain health can be supported by regular exercise, healthy eating, adequate sleep, learning activities, and avoiding smoking.",

                    fact: "The human brain contains approximately 86 billion neurons.",

                    sources: "National Institute of Neurological Disorders and Stroke (NINDS)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "الدماغ",

                    intro: "الدماغ هو مركز التحكم في الجهاز العصبي ويدير العديد من أنشطة الجسم.",

                    location: "يقع الدماغ داخل الجمجمة وتحميه عظام الجمجمة.",

                    function: "يتحكم الدماغ في الحركة والتفكير والذاكرة والمشاعر والحواس والتنفس والعديد من وظائف الجسم الأخرى.",

                    diseases: "تشمل اضطرابات الدماغ الشائعة السكتة الدماغية والصرع ومرض الزهايمر ومرض باركنسون وأورام الدماغ.",

                    prevention: "يمكن دعم صحة الدماغ من خلال ممارسة الرياضة بانتظام، وتناول الغذاء الصحي، والحصول على نوم كافٍ، وممارسة الأنشطة الذهنية وتجنب التدخين.",

                    fact: "يحتوي دماغ الإنسان على حوالي 86 مليار خلية عصبية.",

                    sources: "المعهد الوطني للاضطرابات العصبية والسكتة الدماغية (NINDS)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            lungs: {

                en: {
                    name: "Lungs",

                    intro: "The lungs are the main organs of the respiratory system. They supply oxygen to the body and remove carbon dioxide.",

                    location: "The lungs are located inside the chest on both sides of the heart. They are protected by the rib cage and separated by the mediastinum.",

                    function: "The lungs exchange oxygen and carbon dioxide between the air and the bloodstream. They also help regulate blood pH and support speech by providing airflow.",

                    diseases: "Common lung diseases include asthma, pneumonia, chronic obstructive pulmonary disease (COPD), lung cancer, and tuberculosis.",

                    prevention: "Lung health can be protected by avoiding smoking, exercising regularly, reducing exposure to air pollution, getting recommended vaccinations, and maintaining good hygiene.",

                    fact: "The lungs contain approximately 300 million alveoli, tiny air sacs where oxygen enters the blood and carbon dioxide leaves the body.",

                    sources: "National Heart, Lung, and Blood Institute (NHLBI)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "الرئتان",

                    intro: "الرئتان هما العضوان الرئيسيان في الجهاز التنفسي. تقومان بتزويد الجسم بالأكسجين وإزالة ثاني أكسيد الكربون.",

                    location: "تقع الرئتان داخل الصدر على جانبي القلب، وتحميهما القفص الصدري ويفصل بينهما المنصف.",

                    function: "تقوم الرئتان بتبادل الأكسجين وثاني أكسيد الكربون بين الهواء ومجرى الدم، كما تساعدان في تنظيم درجة حموضة الدم وتوفير تدفق الهواء للكلام.",

                    diseases: "تشمل أمراض الرئة الشائعة الربو والالتهاب الرئوي ومرض الانسداد الرئوي المزمن وسرطان الرئة والسل.",

                    prevention: "يمكن حماية صحة الرئتين من خلال تجنب التدخين، وممارسة الرياضة بانتظام، وتقليل التعرض لتلوث الهواء، والحصول على اللقاحات الموصى بها والحفاظ على النظافة الجيدة.",

                    fact: "تحتوي الرئتان على حوالي 300 مليون حويصلة هوائية، وهي أكياس هوائية صغيرة يدخل فيها الأكسجين إلى الدم ويخرج منها ثاني أكسيد الكربون.",

                    sources: "المعهد الوطني للقلب والرئة والدم (NHLBI)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            liver: {

                en: {
                    name: "Liver",

                    intro: "The liver is a large organ that performs many important functions related to digestion, metabolism, and detoxification.",

                    location: "The liver is located in the upper right side of the abdomen, beneath the diaphragm and above the stomach.",

                    function: "The liver processes nutrients, produces bile, stores energy, removes harmful substances from the blood, and helps regulate metabolism.",

                    diseases: "Common liver diseases include hepatitis, fatty liver disease, cirrhosis, and liver cancer.",

                    prevention: "Liver health can be protected by maintaining a healthy weight, eating a balanced diet, avoiding excessive alcohol, exercising regularly, and preventing viral hepatitis.",

                    fact: "The liver is the largest internal organ in the human body.",

                    sources: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "الكبد",

                    intro: "الكبد عضو كبير يؤدي العديد من الوظائف المهمة المتعلقة بالهضم والتمثيل الغذائي وتنقية الجسم.",

                    location: "يقع الكبد في الجزء العلوي الأيمن من البطن، أسفل الحجاب الحاجز وفوق المعدة.",

                    function: "يعالج الكبد العناصر الغذائية، وينتج العصارة الصفراوية، ويخزن الطاقة، ويزيل المواد الضارة من الدم ويساعد في تنظيم عملية الأيض.",

                    diseases: "تشمل أمراض الكبد الشائعة التهاب الكبد ومرض الكبد الدهني وتليف الكبد وسرطان الكبد.",

                    prevention: "يمكن الحفاظ على صحة الكبد من خلال الحفاظ على وزن صحي، وتناول غذاء متوازن، وتجنب الإفراط في تناول الكحول، وممارسة الرياضة والوقاية من التهاب الكبد الفيروسي.",

                    fact: "الكبد هو أكبر عضو داخلي في جسم الإنسان.",

                    sources: "المعهد الوطني للسكري وأمراض الجهاز الهضمي والكلى (NIDDK)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            kidneys: {

                en: {
                    name: "Kidneys",

                    intro: "The kidneys are two organs that filter the blood and remove waste products from the body.",

                    location: "The kidneys are located in the lower back on either side of the spine, below the rib cage.",

                    function: "The kidneys filter the blood, remove waste and excess water, produce urine, and help regulate blood pressure and body fluids.",

                    diseases: "Common kidney diseases include kidney stones, chronic kidney disease, kidney infections, and kidney failure.",

                    prevention: "Kidney health can be supported by drinking enough water, controlling blood pressure, maintaining a healthy diet, exercising, and avoiding unnecessary medications.",

                    fact: "Each kidney contains approximately one million tiny filtering units called nephrons.",

                    sources: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "الكليتان",

                    intro: "الكليتان عضوان يقومان بتصفية الدم وإزالة الفضلات من الجسم.",

                    location: "تقع الكليتان في أسفل الظهر على جانبي العمود الفقري وتحت القفص الصدري.",

                    function: "تقوم الكليتان بتصفية الدم وإزالة الفضلات والماء الزائد وإنتاج البول والمساعدة في تنظيم ضغط الدم وسوائل الجسم.",

                    diseases: "تشمل أمراض الكلى الشائعة حصى الكلى ومرض الكلى المزمن والتهابات الكلى والفشل الكلوي.",

                    prevention: "يمكن دعم صحة الكلى من خلال شرب كمية كافية من الماء، والسيطرة على ضغط الدم، واتباع نظام غذائي صحي، وممارسة الرياضة وتجنب استخدام الأدوية دون حاجة.",

                    fact: "تحتوي كل كلية على حوالي مليون وحدة ترشيح صغيرة تسمى النفرونات.",

                    sources: "المعهد الوطني للسكري وأمراض الجهاز الهضمي والكلى (NIDDK)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            stomach: {

                en: {
                    name: "Stomach",

                    intro: "The stomach is a muscular organ that stores and digests food after it is swallowed.",

                    location: "The stomach is located in the upper left part of the abdomen, beneath the diaphragm.",

                    function: "The stomach mixes food with digestive juices and helps break it down before it moves into the small intestine.",

                    diseases: "Common stomach problems include gastritis, stomach ulcers, acid reflux, and stomach cancer.",

                    prevention: "Stomach health can be supported by eating a balanced diet, avoiding smoking, limiting irritating foods, and practicing good food hygiene.",

                    fact: "The stomach can expand to hold approximately one liter or more of food and liquid.",

                    sources: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "المعدة",

                    intro: "المعدة عضو عضلي يقوم بتخزين الطعام وهضمه بعد ابتلاعه.",

                    location: "تقع المعدة في الجزء العلوي الأيسر من البطن أسفل الحجاب الحاجز.",

                    function: "تخلط المعدة الطعام مع العصارات الهضمية وتساعد على تكسيره قبل انتقاله إلى الأمعاء الدقيقة.",

                    diseases: "تشمل مشاكل المعدة الشائعة التهاب المعدة وقرحة المعدة والارتجاع الحمضي وسرطان المعدة.",

                    prevention: "يمكن الحفاظ على صحة المعدة من خلال تناول غذاء متوازن، وتجنب التدخين، وتقليل الأطعمة المهيجة والحفاظ على النظافة الغذائية.",

                    fact: "يمكن أن تتمدد المعدة لتستوعب حوالي لتر واحد أو أكثر من الطعام والسوائل.",

                    sources: "المعهد الوطني للسكري وأمراض الجهاز الهضمي والكلى (NIDDK)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            eye: {

                en: {
                    name: "Eye",

                    intro: "The eye is a sensory organ that allows us to see light, colors, shapes, and movement.",

                    location: "The eyes are located inside the eye sockets of the skull and are protected by the eyelids and surrounding structures.",

                    function: "The eyes detect light and send visual information to the brain through the optic nerves.",

                    diseases: "Common eye conditions include cataracts, glaucoma, conjunctivitis, and age-related macular degeneration.",

                    prevention: "Eye health can be protected by regular eye examinations, wearing protective eyewear, avoiding excessive UV exposure, and maintaining a healthy diet.",

                    fact: "The human eye can distinguish millions of different colors.",

                    sources: "National Eye Institute (NEI)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "العين",

                    intro: "العين عضو حسي يسمح لنا برؤية الضوء والألوان والأشكال والحركة.",

                    location: "تقع العينان داخل محجري العين في الجمجمة وتحميهما الجفون والأنسجة المحيطة.",

                    function: "تكتشف العينان الضوء وترسلان المعلومات البصرية إلى الدماغ من خلال الأعصاب البصرية.",

                    diseases: "تشمل أمراض العين الشائعة إعتام عدسة العين والزرق والتهاب الملتحمة والتنكس البقعي المرتبط بالعمر.",

                    prevention: "يمكن حماية صحة العين من خلال فحوصات العين المنتظمة، وارتداء النظارات الواقية، وتجنب التعرض المفرط للأشعة فوق البنفسجية واتباع غذاء صحي.",

                    fact: "يمكن للعين البشرية تمييز ملايين الألوان المختلفة.",

                    sources: "المعهد الوطني للعيون (NEI)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            ear: {

                en: {
                    name: "Ear",

                    intro: "The ear is a sensory organ responsible for hearing and maintaining balance.",

                    location: "The ears are located on both sides of the head.",

                    function: "The ears collect sound waves, convert them into nerve signals, and help the body maintain balance.",

                    diseases: "Common ear problems include ear infections, hearing loss, tinnitus, and earwax blockage.",

                    prevention: "Ear health can be protected by avoiding loud sounds, keeping the ears clean without inserting objects, and treating infections properly.",

                    fact: "The inner ear contains structures that help the body maintain balance and detect movement.",

                    sources: "National Institute on Deafness and Other Communication Disorders (NIDCD)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "الأذن",

                    intro: "الأذن عضو حسي مسؤول عن السمع والحفاظ على توازن الجسم.",

                    location: "تقع الأذنان على جانبي الرأس.",

                    function: "تجمع الأذنان الموجات الصوتية وتحولانها إلى إشارات عصبية وتساعدان الجسم على الحفاظ على التوازن.",

                    diseases: "تشمل مشاكل الأذن الشائعة التهابات الأذن وفقدان السمع وطنين الأذن وانسداد شمع الأذن.",

                    prevention: "يمكن الحفاظ على صحة الأذن من خلال تجنب الأصوات العالية، والحفاظ على نظافة الأذن دون إدخال أجسام فيها ومعالجة الالتهابات بشكل صحيح.",

                    fact: "تحتوي الأذن الداخلية على تراكيب تساعد الجسم على الحفاظ على التوازن واكتشاف الحركة.",

                    sources: "المعهد الوطني للصمم واضطرابات التواصل الأخرى (NIDCD)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            nose: {

                en: {
                    name: "Nose",

                    intro: "The nose is an organ of the respiratory and sensory systems that helps with breathing and smell.",

                    location: "The nose is located in the center of the face and connects the outside environment with the respiratory system.",

                    function: "The nose filters, warms, and moistens incoming air and detects different smells.",

                    diseases: "Common nose conditions include sinusitis, allergic rhinitis, nasal polyps, and nosebleeds.",

                    prevention: "Nose health can be supported by avoiding smoke and pollutants, treating allergies, maintaining good hygiene, and staying hydrated.",

                    fact: "The human nose can detect a very large number of different smells.",

                    sources: "MedlinePlus<br>National Institute on Deafness and Other Communication Disorders (NIDCD)<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "الأنف",

                    intro: "الأنف عضو في الجهاز التنفسي والحسي ويساعد على التنفس والشم.",

                    location: "يقع الأنف في منتصف الوجه ويربط البيئة الخارجية بالجهاز التنفسي.",

                    function: "يقوم الأنف بتصفية الهواء الداخل وتدفئته وترطيبه ويساعد على اكتشاف الروائح المختلفة.",

                    diseases: "تشمل أمراض الأنف الشائعة التهاب الجيوب الأنفية والتهاب الأنف التحسسي واللحميات الأنفية ونزيف الأنف.",

                    prevention: "يمكن الحفاظ على صحة الأنف من خلال تجنب الدخان والملوثات، ومعالجة الحساسية، والحفاظ على النظافة وشرب كمية كافية من الماء.",

                    fact: "يمكن للأنف البشري اكتشاف عدد كبير جداً من الروائح المختلفة.",

                    sources: "MedlinePlus<br>المعهد الوطني للصمم واضطرابات التواصل الأخرى (NIDCD)<br>منظمة الصحة العالمية (WHO)"
                }
            },


            teeth: {

                en: {
                    name: "Teeth",

                    intro: "Teeth are hard structures in the mouth that help us bite and chew food.",

                    location: "The teeth are located in the upper and lower jaws inside the mouth.",

                    function: "Teeth help cut, tear, and grind food and also contribute to clear speech.",

                    diseases: "Common dental problems include tooth decay, gum disease, tooth infections, and tooth loss.",

                    prevention: "Teeth can be protected by brushing twice a day, flossing regularly, limiting sugary foods, and visiting the dentist regularly.",

                    fact: "Tooth enamel is the hardest substance in the human body.",

                    sources: "National Institute of Dental and Craniofacial Research (NIDCR)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "الأسنان",

                    intro: "الأسنان تراكيب صلبة داخل الفم تساعدنا على قضم الطعام ومضغه.",

                    location: "تقع الأسنان في الفكين العلوي والسفلي داخل الفم.",

                    function: "تساعد الأسنان على تقطيع الطعام وتمزيقه وطحنه، كما تساهم في وضوح الكلام.",

                    diseases: "تشمل مشاكل الأسنان الشائعة تسوس الأسنان وأمراض اللثة والتهابات الأسنان وفقدان الأسنان.",

                    prevention: "يمكن حماية الأسنان من خلال تنظيفها مرتين يومياً، واستخدام الخيط بانتظام، وتقليل الأطعمة السكرية وزيارة طبيب الأسنان بانتظام.",

                    fact: "مينا الأسنان هي أقسى مادة في جسم الإنسان.",

                    sources: "المعهد الوطني لأبحاث الأسنان والوجه والفكين (NIDCR)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            bones: {

                en: {
                    name: "Bones",

                    intro: "Bones are strong structures that form the skeleton and support and protect the body.",

                    location: "Bones are found throughout the body and form the human skeleton.",

                    function: "Bones support the body, protect internal organs, allow movement, store minerals, and produce blood cells.",

                    diseases: "Common bone conditions include osteoporosis, fractures, arthritis, and bone infections.",

                    prevention: "Bone health can be supported by regular exercise, sufficient calcium and vitamin D, maintaining a healthy weight, and avoiding smoking.",

                    fact: "The adult human skeleton normally contains 206 bones.",

                    sources: "National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "العظام",

                    intro: "العظام تراكيب قوية تكوّن الهيكل العظمي وتدعم الجسم وتحميه.",

                    location: "توجد العظام في جميع أنحاء الجسم وتكوّن الهيكل العظمي للإنسان.",

                    function: "تدعم العظام الجسم وتحمي الأعضاء الداخلية وتسمح بالحركة وتخزن المعادن وتساهم في إنتاج خلايا الدم.",

                    diseases: "تشمل أمراض العظام الشائعة هشاشة العظام والكسور والتهاب المفاصل والتهابات العظام.",

                    prevention: "يمكن الحفاظ على صحة العظام من خلال ممارسة الرياضة بانتظام، والحصول على كمية كافية من الكالسيوم وفيتامين د، والحفاظ على وزن صحي وتجنب التدخين.",

                    fact: "يحتوي الهيكل العظمي للإنسان البالغ عادةً على 206 عظمة.",

                    sources: "المعهد الوطني لالتهاب المفاصل وأمراض العضلات والعظام والجلد (NIAMS)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            },


            muscles: {

                en: {
                    name: "Muscles",

                    intro: "Muscles are tissues that allow the body to move and help maintain posture and stability.",

                    location: "Muscles are found throughout the body and are attached to bones or located within internal organs.",

                    function: "Muscles produce movement, maintain posture, stabilize joints, and help generate body heat.",

                    diseases: "Common muscle problems include muscle strains, cramps, muscular dystrophy, and muscle inflammation.",

                    prevention: "Muscle health can be supported by regular exercise, proper nutrition, adequate hydration, stretching, and sufficient rest.",

                    fact: "The human body contains more than 600 muscles.",

                    sources: "National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)<br>MedlinePlus<br>World Health Organization (WHO)"
                },

                ar: {
                    name: "العضلات",

                    intro: "العضلات أنسجة تسمح للجسم بالحركة وتساعد على الحفاظ على وضعية الجسم وثباته.",

                    location: "توجد العضلات في جميع أنحاء الجسم وترتبط بالعظام أو توجد داخل بعض الأعضاء الداخلية.",

                    function: "تنتج العضلات الحركة وتحافظ على وضعية الجسم وتثبت المفاصل وتساعد على إنتاج حرارة الجسم.",

                    diseases: "تشمل مشاكل العضلات الشائعة الشد العضلي والتشنجات وضمور العضلات والتهابات العضلات.",

                    prevention: "يمكن الحفاظ على صحة العضلات من خلال ممارسة الرياضة بانتظام، والتغذية الجيدة، وشرب كمية كافية من الماء، وتمارين التمدد والحصول على الراحة الكافية.",

                    fact: "يحتوي جسم الإنسان على أكثر من 600 عضلة.",

                    sources: "المعهد الوطني لالتهاب المفاصل وأمراض العضلات والعظام والجلد (NIAMS)<br>MedlinePlus<br>منظمة الصحة العالمية (WHO)"
                }
            }

        };


        // ==========================================
        // FIND CURRENT ORGAN
        // ==========================================

        let organKey = currentOrgan;

        // Handle possible names
        if (currentOrgan === "lung") {
            organKey = "lungs";
        }

        if (currentOrgan === "kidney") {
            organKey = "kidneys";
        }

        if (currentOrgan === "muscle") {
            organKey = "muscles";
        }

        if (currentOrgan === "bone") {
            organKey = "bones";
        }

        if (currentOrgan === "tooth") {
            organKey = "teeth";
        }


        const organ = organs[organKey];


        if (organ) {

            const data = organ[language];


            // Organ title
            organTitle.textContent =
                data.name;


            // Intro
            const organIntro =
                document.getElementById("organIntro");

            if (organIntro) {
                organIntro.textContent =
                    data.intro;
            }


            // Location
            const locationTitle =
                document.getElementById("locationTitle");

            const locationText =
                document.getElementById("locationText");

            if (locationTitle) {
                locationTitle.textContent =
                    language === "ar" ? "الموقع" : "Location";
            }

            if (locationText) {
                locationText.textContent =
                    data.location;
            }


            // Function
            const functionTitle =
                document.getElementById("functionTitle");

            const functionText =
                document.getElementById("functionText");

            if (functionTitle) {
                functionTitle.textContent =
                    language === "ar" ? "الوظيفة" : "Function";
            }

            if (functionText) {
                functionText.textContent =
                    data.function;
            }


            // Diseases
            const diseasesTitle =
                document.getElementById("diseasesTitle");

            const diseasesText =
                document.getElementById("diseasesText");

            if (diseasesTitle) {
                diseasesTitle.textContent =
                    language === "ar"
                        ? "الأمراض الشائعة"
                        : "Common Diseases";
            }

            if (diseasesText) {
                diseasesText.textContent =
                    data.diseases;
            }


            // Prevention
            const preventionTitle =
                document.getElementById("preventionTitle");

            const preventionText =
                document.getElementById("preventionText");

            if (preventionTitle) {
                preventionTitle.textContent =
                    language === "ar"
                        ? "الوقاية"
                        : "Prevention";
            }

            if (preventionText) {
                preventionText.textContent =
                    data.prevention;
            }


            // Scientific Fact
            const factTitle =
                document.getElementById("factTitle");

            const factText =
                document.getElementById("factText");

            if (factTitle) {
                factTitle.textContent =
                    language === "ar"
                        ? "حقيقة علمية"
                        : "Scientific Fact";
            }

            if (factText) {
                factText.textContent =
                    data.fact;
            }


            // Sources
            const sourcesTitle =
                document.getElementById("sourcesTitle");

            const sourcesText =
                document.getElementById("sourcesText");

            if (sourcesTitle) {
                sourcesTitle.textContent =
                    language === "ar"
                        ? "المصادر العلمية"
                        : "Scientific Sources";
            }

            if (sourcesText) {
                sourcesText.innerHTML =
                    data.sources;
            }


            // Back button
            const backButton =
                document.getElementById("backButton");

            if (backButton) {

                if (language === "ar") {
                    backButton.innerHTML =
                        "→ العودة إلى الأعضاء";
                } else {
                    backButton.innerHTML =
                        "← Back to Organs";
                }
            }
        }
    }
} 