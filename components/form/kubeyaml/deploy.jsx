import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Component() {
  const template = {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: {
      name: "name",
      generateName: "generateName",
      namespace: "namespace",
      labels: [{ a: "a" }, { b: "b" }, { c: "c" }],
    },
  };
  const { register, handleSubmit, reset } = useForm({
    defaultValues: template,
  });

  const [stastics, setStastics] = useState({
    labels: template?.metadata?.labels?.length || 0,
  });

  return (
    <>
      <label htmlFor="form" className="btn">
        新建
      </label>

      <input type="checkbox" id="form" className="modal-toggle" />
      <label htmlFor="form" className="modal cursor-pointer">
        <label className="modal-box">
          <form
            className=" flex flex-col gap-y-10 font-bold text-base"
            onSubmit={handleSubmit(data => {
              console.log(data);
              reset();
            })}
          >
            <header className="text-lg">新建Deploy</header>
            <main className=" flex-auto grid grid-cols-3 gap-y-5">
              <label className=" my-auto">Api Version:</label>
              <input
                className=" col-span-2"
                type="text"
                {...register("apiVersion")}
              />

              <label className=" my-auto">Kind: </label>
              <input
                className=" col-span-2"
                type="text"
                {...register("kind")}
              />

              <label className=" col-span-3 ">
                <div className=" collapse collapse-plus">
                  <input type="checkbox" />
                  <div className=" collapse-title pl-0">Metadata:</div>
                  <div className=" collapse-content grid grid-cols-3 gap-y-3">
                    <label className=" my-auto">Name: </label>
                    <input
                      className=" col-span-2"
                      type="text"
                      {...register("metadata.name")}
                    />

                    <label className=" my-auto">GenerateName: </label>
                    <input
                      className=" col-span-2"
                      type="text"
                      {...register("metadata.generateName")}
                    />

                    <label className=" my-auto">Namespace: </label>
                    <input
                      className=" col-span-2"
                      type="text"
                      {...register("metadata.namespace")}
                    />

                    <label className=" col-span-3">
                      <div className=" collapse collapse-plus">
                        <input type="checkbox" />
                        <div className=" collapse-title pl-0">Labels</div>
                        <div className=" collapse-content flex flex-col">
                          <div>
                            {for i in 0..stastics.label}
                          </div>
                          <button
                            className="btn btn-ghost text-2xl mx-auto"
                            onClick={() =>
                              setStastics({ label: stastics.label++ })
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </label>
            </main>

            <footer className="flex flex-row gap-x-24">
              <button className="flex-auto btn">重置</button>
              <button className="flex-auto">
                <label htmlFor="form" className="btn w-full">
                  提交
                </label>
              </button>
            </footer>
          </form>
        </label>
      </label>
    </>
  );
}
