

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="row flex flex-wrap -mx-3 transform-none opacity-100 translate-y-[80px] translate-z-0">
      <div className="col-12 flex-none w-full max-w-full px-3">
        <div className="heading relative z-10 flex gap-[5px] mb-[50px]">
          <div className="heading__shape w-[22px] h-[22px] rounded-full border-2 border-[#152035] block relative mt-3 after:content-[''] after:absolute after:left-[-6px] after:top-[2px] after:w-[22px] after:h-[22px] after:rounded-full after:bg-[#ffb400] -z-10 after:box-border"></div>
          <div className="heading__content flex-1">
            <h2 className="capitalize mb-0 font-extrabold text-[32px]">
              {title}
            </h2>
            <p className="text-[#6c757d]">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
