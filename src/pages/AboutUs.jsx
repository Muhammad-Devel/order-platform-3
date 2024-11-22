import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-claret mb-8">
          Biz haqimizda
        </h1>

        {/* Kompaniya haqida qisqacha */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Bizning vazifamiz
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bizning maqsadimiz – mijozlarimizga sifatli va mazali tortlar hamda
            shirinliklarni yetkazib berish. Biz iste’molchilarimizni quvontirish
            va hayotlaridagi muhim damlarni shirinlashtirish uchun ishlaymiz.
            Har bir buyurtma biz uchun muhim va uni a’lo darajada bajarish uchun
            kuch sarflaymiz.
          </p>
        </section>

        {/* Tarix */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Bizning tariximiz
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bizning kompaniyamiz 2010 yilda kichik shirinlik do‘koni sifatida
            tashkil etilgan. O'sha paytdan beri bizning jamoamiz kengayib bordi
            va hozirda eng yaxshi oshpazlar va qandolatchilar bilan ishlaymiz.
            Biz mijozlarimizga yangilik va shirinliklar bo'yicha eng yuqori
            sifatli xizmatlarni taqdim etamiz.
          </p>
        </section>

        {/* Jamoa */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Bizning jamoamiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Jamoa a'zosi"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Olimjon Aliyev
              </h3>
              <p className="text-gray-500">Bosh oshpaz</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Jamoa a'zosi"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Dilnoza Ismoilova
              </h3>
              <p className="text-gray-500">Marketing rahbari</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Jamoa a'zosi"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Rustam Qodirov
              </h3>
              <p className="text-gray-500">Sifat nazorati</p>
            </div>
          </div>
        </section>

        {/* Aloqa */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Biz bilan bog'lanish
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Savollaringiz bo'lsa yoki buyurtma berish uchun, biz bilan
            bog'lanishingiz mumkin. Biz har doim sizning ehtiyojlaringizga javob
            berishga tayyormiz.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Telefon: +998 90 123 45 67 <br />
            Email: info@bizningkompaniya.uz
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
