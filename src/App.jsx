import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [store, setStore] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => setStore(result.data));
  }, []);

  const proceed = (event) => {
    var options = {
      key: "rzp_live_Dl1eEyYZBVUkhK", // Enter the Key ID generated from the Dashboard
      amount: event.price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: event.title,
      description:"Test for Integration",
      image:
        "https://cdn-images-1.medium.com/max/1200/1*NKfnk1UF9xGoR0URBEc6mw.png",
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
      },
      // prefill: {
      //   name: "Manoj Kushwah",
      //   email: "gaurav.kumar@example.com",
      //   contact: "9999999999",
      // },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };
  return (
    <>
      <h3 className="text-center text-xl py-5">
        👉 Razorpay Payments Gateway Integration ✔
      </h3>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            {store &&
              store.map((data) => {
                return (
                  <>
                    <div class="p-4 md:w-1/3">
                      <div class="h-full border-2 border-indigo-700 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          class="lg:h-52 md:h-36 w-full object-cover object-center"
                          src={data.image}
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-lg title-font font-semibold text-indigo-700 mb-1">
                            ₹ {data.price}
                          </h2>
                          <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                            {data.title}
                          </h1>
                          <p class="leading-relaxed text-xs mb-3">
                            {data.description}
                          </p>
                          <div
                            class="flex items-center flex-wrap "
                            onClick={() => proceed(data)}
                          >
                            <a class="bg-indigo-500 text-white py-2 hover:cursor-pointer hover:bg-indigo-700 px-3 rounded-md font-medium inline-flex items-center md:mb-2 lg:mb-0">
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
