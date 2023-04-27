# halkhadhami.github.io
خطوات الحصول على استضافة مجانية على GitHub ولكن ببعض القيود مثل عدم دعم لغات السيرفر مثل PHP و Python وغيرها، حيث يكون نوع الاستضافة هو استضافة ستاتيك.

1. أنشئ حسابًا على GitHub إذا لم يكن لديك حساب بالفعل.

2. أنشئ مستودعًا (repository) وضع الاسم على النحو التالي:
<user>.github.io، ويجب أن يكون النوع "Public" وأن يحتوي المستودع على ملف README.

3. من إعدادات المستودع، انتقل إلى "Setting > code and authentication > pages > build and deployment > source" ثم اختر "deploy from a branch"، واختر branch الرئيسي master branch.

4. قم برفع موقعك الذي يحتوي ملف index.html إلى هذا المستودع باستخدام تطبيق GitHub Desktop أو بالسحب والإفلات.

5. بعد انتظار بضع دقائق، يمكنك الوصول إلى الموقع الخاص بك باستخدام اسم المستودع الذي تم إنشاؤه في الخطوة 2، على سبيل المثال:
halkhadhami.github.io/
