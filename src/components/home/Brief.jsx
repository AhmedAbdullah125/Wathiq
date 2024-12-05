import React, { useState } from 'react'; // Importing React to use JSX syntax and create components.
import analysis from '/public/analysis.png';
import img2 from '/public/HeroBg.jpg';
import img3 from '/public/saa.jpeg';
import img4 from '/public/image.png';
import Image from 'next/image';
export default function Brief() { // Defining the main functional component named 'Footer'.
    const [activeTab, setActiveTab] = useState(1);
    let [analysisTabs, setAnalysisTabs] = useState(1);


    return (
        <div className="brief">
            <div className="container m-auto">
                <h2> نظام متكامل لمراقبة شاحناتك</h2>
                <div className="tabs">
                    <div className="heads">
                        <h3 onClick={() => setActiveTab(1)} className={activeTab == 1 ? "active" : ""}>نظام واثق</h3>
                        <h3 onClick={() => setActiveTab(2)} className={activeTab == 2 ? "active" : ""}>تطبيق المناديب</h3>
                        <h3 onClick={() => setActiveTab(3)} className={activeTab == 3 ? "active" : ""}>تطبيق السائق</h3>
                    </div>
                    <div className="content">
                        {activeTab === 1 ?
                            <div className="analysis">
                                <div className="data">
                                    <div className="analysis-tabs">
                                        <div className="analysis-tab">
                                            <div className={`tab ${analysisTabs == 1 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(1)}>
                                                <div className="bulet"></div>
                                                <h5>لوحه التحكم</h5>
                                            </div>
                                            {/* <div className={`tab-data ${analysisTabs == 1 ? "active" : ""}`}>
                                                <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                    والعملاء في واجهة واحدة مع تمثيل بياني
                                                    سهل القراءة.</p>
                                            </div> */}
                                        </div>

                                        <div className="analysis-tab">
                                            <div className={`tab ${analysisTabs == 2 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(2)}>
                                                <div className="bulet"></div>
                                                <h5>الاقفال</h5>
                                            </div>
                                            {/* <div className={`tab-data ${analysisTabs == 2 ? "active" : ""}`}>
                                                <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                    والعملاء في واجهة واحدة مع تمثيل بياني
                                                    سهل القراءة.</p>
                                            </div> */}
                                        </div>
                                        <div className="analysis-tab">
                                            <div className={`tab ${analysisTabs == 4 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(4)}>
                                                <div className="bulet"></div>
                                                <h5>قوائم الشاحنات</h5>
                                            </div>
                                            {/* <div className={`tab-data ${analysisTabs == 4 ? "active" : ""}`}>
                                                <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                    والعملاء في واجهة واحدة مع تمثيل بياني
                                                    سهل القراءة.</p>
                                            </div> */}
                                        </div>
                                        <div className="analysis-tab">
                                            <div className={`tab ${analysisTabs == 5 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(5)}>
                                                <div className="bulet"></div>
                                                <h5>قوائم الموظفين</h5>
                                            </div>
                                            {/* <div className={`tab-data ${analysisTabs == 5 ? "active" : ""}`}>
                                                <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                    والعملاء في واجهة واحدة مع تمثيل بياني
                                                    سهل القراءة.</p>
                                            </div> */}
                                        </div>
                                        <div className="analysis-tab">
                                            <div className={`tab ${analysisTabs == 6 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(6)}>
                                                <div className="bulet"></div>
                                                <h5>لوحه التحكم</h5>
                                            </div>
                                            {/* <div className={`tab-data ${analysisTabs == 6 ? "active" : ""}`}>
                                                <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                    والعملاء في واجهة واحدة مع تمثيل بياني
                                                    سهل القراءة.</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="img">
                                    <div className="img-cont">
                                        {/* {
                                            analysisTabs == 1 ?
                                                <Image src={analysis} alt="Wathiq" />
                                                :
                                                analysisTabs == 2 ?
                                                    <Image src={img2} alt="Wathiq" />
                                                    :
                                                    analysisTabs == 3 ?
                                                        <Image src={img3} alt="Wathiq" />
                                                        :
                                                        analysisTabs == 4 ?
                                                            <Image src={analysis} alt="Wathiq" />
                                                            :
                                                            analysisTabs == 5 ?
                                                                <Image src={img2} alt="Wathiq" />
                                                                :
                                                                analysisTabs == 6 ?
                                                                    <Image src={img3} alt="Wathiq" />
                                                                    :
                                                                    <Image src={img3} alt="Wathiq" />
                                                                    } */}
                                        <Image src={img4} alt="Wathiq" />
                                    </div>
                                </div>
                            </div>
                            : activeTab == 2 ?
                            <div className="analysis">
                            <div className="data">
                                <div className="analysis-tabs">
                                    <div className="analysis-tab">
                                        <div className={`tab ${analysisTabs == 1 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(1)}>
                                            <div className="bulet"></div>
                                            <h5>دقة في تسجيل مواقع الإغلاق و الفتح</h5>
                                        </div>
                                        {/* <div className={`tab-data ${analysisTabs == 1 ? "active" : ""}`}>
                                            <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                والعملاء في واجهة واحدة مع تمثيل بياني
                                                سهل القراءة.</p>
                                        </div> */}
                                    </div>

                                    <div className="analysis-tab">
                                        <div className={`tab ${analysisTabs == 2 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(2)}>
                                            <div className="bulet"></div>
                                            <h5>إشعارات فورية عند تغير حالة الطلب</h5>
                                        </div>
                                        {/* <div className={`tab-data ${analysisTabs == 2 ? "active" : ""}`}>
                                            <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                والعملاء في واجهة واحدة مع تمثيل بياني
                                                سهل القراءة.</p>
                                        </div> */}
                                    </div>
                                    <div className="analysis-tab">
                                        <div className={`tab ${analysisTabs == 4 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(4)}>
                                            <div className="bulet"></div>
                                            <h5>قوائم الشاحنات</h5>
                                        </div>
                                        {/* <div className={`tab-data ${analysisTabs == 4 ? "active" : ""}`}>
                                            <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                والعملاء في واجهة واحدة مع تمثيل بياني
                                                سهل القراءة.</p>
                                        </div> */}
                                    </div>
                                    <div className="analysis-tab">
                                        <div className={`tab ${analysisTabs == 5 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(5)}>
                                            <div className="bulet"></div>
                                            <h5>تزويد السائق ببيانات المحطة</h5>
                                        </div>
                                        {/* <div className={`tab-data ${analysisTabs == 5 ? "active" : ""}`}>
                                            <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                والعملاء في واجهة واحدة مع تمثيل بياني
                                                سهل القراءة.</p>
                                        </div> */}
                                    </div>
                                    <div className="analysis-tab">
                                        <div className={`tab ${analysisTabs == 6 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(6)}>
                                            <div className="bulet"></div>
                                            <h5>لغات متعددة لسهولة استخدام التطبيق</h5>
                                        </div>
                                        {/* <div className={`tab-data ${analysisTabs == 6 ? "active" : ""}`}>
                                            <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                والعملاء في واجهة واحدة مع تمثيل بياني
                                                سهل القراءة.</p>
                                        </div> */}
                                    </div>
                                    <div className="analysis-tab">
                                        <div className={`tab ${analysisTabs == 7 ? "active-tab" : ""}`} onClick={() => setAnalysisTabs(7)}>
                                            <div className="bulet"></div>
                                            <h5>تسجيل المستحقات المالية للسائق.</h5>
                                        </div>
                                        {/* <div className={`tab-data ${analysisTabs == 6 ? "active" : ""}`}>
                                            <p>توضح جميع العمليات وبيانات الرحلات والسائقين
                                                والعملاء في واجهة واحدة مع تمثيل بياني
                                                سهل القراءة.</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="img">
                                <div className="img-cont">
                                    {/* {
                                        analysisTabs == 1 ?
                                            <Image src={analysis} alt="Wathiq" />
                                            :
                                            analysisTabs == 2 ?
                                                <Image src={img2} alt="Wathiq" />
                                                :
                                                analysisTabs == 3 ?
                                                    <Image src={img3} alt="Wathiq" />
                                                    :
                                                    analysisTabs == 4 ?
                                                        <Image src={analysis} alt="Wathiq" />
                                                        :
                                                        analysisTabs == 5 ?
                                                            <Image src={img2} alt="Wathiq" />
                                                            :
                                                            analysisTabs == 6 ?
                                                                <Image src={img3} alt="Wathiq" />
                                                                :
                                                                <Image src={img3} alt="Wathiq" />
                                                                } */}
                                    <Image src={img3} alt="Wathiq" />
                                </div>
                            </div>
                        </div>
                                :
                                <h4>تطبيق السائق</h4>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
