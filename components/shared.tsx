import { useModal } from "@/context/modal";
import { IoIosCloseCircle } from "react-icons/io";

export function MessageSentModal() {
  const { hideModal } = useModal();

  return (
    <div className="wmin_md:w-[680px] wmax_md:w-full h-fit bg-black">
      <div className="w-full h-fit py-[2vh] pb-[5vh] flex flex-col gap-[3vh]">
        <div className="w-full h-full flex flex-col gap-[12px] mt-[0vh]">
          <div className="flex flex-col gap-[12px]">
            <div className="w-full flex items-center justify-between">
              <div className="text-[28px] font-semibold text-white uppercase">
              </div>

              <IoIosCloseCircle
                onClick={hideModal}
                className="text-white w-[40px] h-[40px] mr-[2vh]"
              />
            </div>
           
          </div>

          <div className="flex flex-col gap-[20px] items-center justify-center">
            <div className="w-[277px] h-[266px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 277 276"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 145.051L70.4906 266C111.464 202.282 231.698 21.1265 272 5"
                  stroke="#454545"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="w-fit h-fit flex flex-col gap-[10px]">
                <div className="text-white wmin_md:text-[32px] wmax_md:text-[24px] font-bold uppercase">MESSAGE SENT</div>

                <div className="text-white wmin_md:text-[20px] wmax_md:text-[16px] font-semibold">
                    Thank you for contacting us. Our <br />
                    team will reach out to you shortly.
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function EmailSubscribedModal() {
  const { hideModal } = useModal();

  return (
    <div className="wmin_md:w-[680px] wmax_md:w-full h-fit bg-black pl-[7.5%]">
      <div className="w-full h-fit py-[2vh] pb-[5vh] flex flex-col gap-[3vh]">
        <div className="w-full h-full flex flex-col gap-[12px] mt-[0vh]">
          <div className="flex flex-col gap-[12px]">
            <div className="w-full flex items-center justify-between">
              <div className="text-[28px] font-semibold text-white uppercase">
              </div>

              <IoIosCloseCircle
                onClick={hideModal}
                className="text-white w-[40px] h-[40px] mr-[2vh]"
              />
            </div>
            
          </div>

          <div className="flex flex-col gap-[20px] items-center justify-center">
            <div className="w-[277px] h-[266px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 277 276"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 145.051L70.4906 266C111.464 202.282 231.698 21.1265 272 5"
                  stroke="#454545"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="w-fit h-fit flex flex-col gap-[10px]">
                <div className="text-white wmin_md:text-[32px] wmax_md:text-[24px] font-bold uppercase">EMAIL SUBSCRIBED</div>

                <div className="text-white wmin_md:text-[20px] wmax_md:text-[16px] font-semibold">
                Thank you for subscribing to our <br />
                newsletter.
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
