import './popup.css'
import * as React from "react";


class Popup extends React.Component {


    render() {
        if (this.props.isOpen)
            return (
                <div className={"popup"}>
                    <svg  viewBox='0 0 512 512' className={"closeIcon"} onClick={this.props.changePopupStatus}>
                        <title>Close</title>
                        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                              strokeWidth='32' d='M368 368L144 144M368 144L144 368'/>
                    </svg>

                    <div className="popupWindow">
                        <h3>سياسة الخصوصية</h3>
                        <p style={{textAlign:"justify"}}>
                            هذه السياسة توضّح سياسة الخصوصية لهايبر ماركت عنبر فيما يتعلق بجمع واستخدام وتخزين ومشاركة
                            وحماية المعلومات الشخصية الخاصة بك، وتطبق نفس السياسة على الموقع الإلكتروني وجميع المواقع
                            والتطبيقات والخدمات والأدوات ذات الصلة بهايبر ماركت عنبر بغض النظر عن طريقة الوصول إلى هذه
                            الخدمات بما في ذلك الأجهزة المحمولة.

                            <br/><h4>:إطار الإتفاقية </h4>
                            عند استخدامك لهايبر ماركت عنبر وأي من الخدمات ذات الصلة، فأنت تمنح الموقع موافقة صريحة على
                            جمع واستخدام والإحتفاظ بمعلوماتك الشخصية، وذلك كما هو موضح في سياسة الخصوصية وشروط الاستخدام
                            .الخاصة بالهايبر
                            <br/>

                            بإمكانك زيارة موقع هايبر ماركت عنبر من دون القيام بتسجيل حساب شخصي. وعندما تقرر تزويد الموقع
                            .بمعلوماتك الشخصية، فإنك توافق على أن يتم إرسال هذه المعلومات وتخزينها في الخوادم الخاصة به
                            <br/>

                            عند زيارتك للموقع أو استخدام الخدمات التي يقدمها لك الموقع أو للمستخدمين بشكل عام أو الردّ
                            على الإعلانات أو غير ذلك من المحتوى الموجود، سيقوم الموقع بجمع المعلومات المرسلة من جهازك
                            تلقائياً سواء كان كمبيوتراً أم هاتفاً محمولاً أم غير ذلك. وتشمل هذه المعلومات ما يلي:

                            <br/>

                            المعلومات التي تمّ جمعها من خلال تفاعلك على الموقع والتي تشمل: رقم الجهاز، نوع الجهاز،
                            معلومات موقعك الجغرافي، معلومات الإتصال بشبكة الإنترنت، إحصائيات عرض الصفحات، الزيارات من
                            وإلى الموقع، الروابط المترجعة، بيانات الإعلان، عنوان البروتوكول ومعلومات الدخول لشبكة
                            الإنترنت.
                            المعلومات التي يجمعها الموقع من خلال ملفات الكوكيز (سجلات التتبع)، مشغلات الإنترنت
                            والتكنولوجيات المشابهة.

                            يجمع هايبر ماركت عنبر أي معلومات تقوم أنت بإدخالها على الموقع أو تلك التي تقدمها عند
                            استخدامك لأي من خدماته. وهذه المعلومات تضم:
                            · المعلومات التي يقدمها الهايبر عند التسجيل أو عند استخدامك للخدمات ·
                            المعلومات الخاصة بموقعك الجغرافي وموقع جهازك وتضم؛ معرف المعلومات الخاص بك ما إذا كنت قد
                            فعلت هذه الخدمة على هاتفك المحمول من قبل.

                            أنت توافق على أن يقوم هايبر ماركت عنبر باستخدام معلوماتك الشخصية للأغراض التالية:
                            · لتمكينك من الوصول إلى خدماته المتنوعة وخدمة العملاء عن طريق البريد الإلكتروني أو رقم
                            الهاتف
                            · للمنع والكشف عن والتحقيق عند وجود إحتمالية لأنشطة محظورة فيها احتيال ومخالفة للقانون وعدم
                            التقيّد بشروط استخدام الموقع ·
                            لتخصيص وقياس وتحسين خدمات مركز وفر والمحتوى والإعلانات ·
                            للتواصل معك عن طريق البريد الإلكتروني، التنبيهات، الرسائل النصية أو الهاتف للاستفسار عن
                            خدمات الهايبر لأغراض التسويق والتحديثات والعروض الترويجية بناء على أولويات الرسائل (إن
                            وجدت)، أو لأي أغراض كما هو منصوص عليه في سياسة الخصوصية هذه ·
                            لتقديم المزيد من الخدمات الأخرى التي قمت بطلبها، كما هو موضّح في آلية جمع المعلومات على
                            الموقع · لاعتبارك مرشح محتمل عند قيامك بتحميل سيرتك الذاتية على صفحة الوظائف
                            قد يقدم هايبر ماركت عنبر خدمات الدخول التي تمكنك من الوصول إلى الموقع أو المواقع ذات الصلة
                            باعتماد تسجيل الدخول الخاص بك.

                            وقد يقوم الهايبر بمشاركة معلوماتك الشخصية لـ :
                            للإمتثال بالإلتزامات القانونية أو أمر صادر من المحكمة
                            إذا كان ذلك ضرورياً لمنع وكشف او الحماية من الجرائم الجنائية، مثل النصب والاحتيال والدعاوى
                            القضائية
                            إذا كان ذلك ضرورياً للحفاظ على سياستنا أو لحماية حقوق الآخرين وحرياتهم.

                            وعلاوة على ذلك، فإنت توافق على إحتمالية استخدام الموقع للمعلومات التي تم جمعها لإرسال العروض
                            المتوفرة لك، سواء كانت شخصية أم لا، أو الاتصال بك عن طريق رقم الهاتف وذلك فيما يتعلق
                            بالمنتجات أو الخدمات التي يقدمها الهايبر، أي أنك تسمح لفريق هايبر ماركت عنبر بالتواصل معك
                            سواء أكان ذلك عبر الاتصال بك أو إرسال إخطارات أو إرسال واتساب أو غير ذلك من وسائل الاتصال.

                            ولن يقوم الموقع ببيع أو تأجير معلوماتك الشخصية مثل لأطراف ثالثة لأغراض التسويق الخاصة بهم
                            بدون موافقتك الصريحة والتي تتمثل بزيارتك للموقع أو إستخدام التطبيقات الخاصة به. وقد الهايبر
                            معلوماتك مع معلومات أخرى تم جمعها من شركات أخرى لاستخدامها في تحسين وتخصيص الخدمات والوظائف.

                            يحمي هايبر ماركت عنبر معلوماتك الخاصة باستخدام تدابير أمنية وتقنية وإدارية (مثل: جدران
                            الحماية Firewall، تشفير البيانات وضوابط الوصول المادية والإدارية للبيانات والخوادم) والتي
                            بدورها تحد من مخاطر الخسارة وسوء المعاملة والوصول غير المصرّح به، والكشف عن المعلومات
                            وتغييرها. وبالرغم من ذلك، إذا كنت تعتقد بأن هنالك من يستخدم حسابك الشخصي بشكل سيء، يرجى
                            التواصل مع خدمة العملاء.

                            قد يغير هايبر ماركت عنبر سياسة الخصوصية هذه من وقت لآخر، لذا ننصحك بقراءتها بشكل منتظم، وعند
                            حدوث أي تغييرات جوهرية عليها سيتم إعلان ذلك على الموقع، ويتم تفعيل النسخة المعدلة من سياسة
                            الخصوصية على الفور عقب نشرها على الموقع.

                            لمزيد من الاستفسارات يمكنكم التواصل معنا من خلال الرقم التالي من الساعة 9 صباحاً الى الساعة
                            12 مساءأ بتوقيت العراق من خلال الرقم التالي: 009647803111133
                            هايبر ماركت عنبر آخر تحديث 20 نوفمبر ، 2020
                            جميع الحقوق محفوظة لدى هايبر ماركت عنبر © 2020
                        </p>
                    </div>
                </div>
            )
        else
            return (
                <></>
            )
    }
}

export default Popup