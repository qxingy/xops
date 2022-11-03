import { useForm } from "react-hook-form";

export default function Component() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      branch: "main",
      git_repo_name: "https://",
    },
  });

  return (
    <>
      <label htmlFor="create" className="btn">
        新建
      </label>

      <input type="checkbox" id="create" className="modal-toggle" />
      <label htmlFor="create" className="modal cursor-pointer">
        <label className="modal-box">
          <head>
            <span className=" font-bold text-lg h-10">新建项目</span>
            <label className="">x</label>
          </head>

          <form
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(data => {
              console.log(data);
              reset();
            })}
          >
            <label className=" text-base">项目名称:</label>
            <input type="text" {...register("name")} />
            <label className=" text-base">仓库地址</label>
            <input type="text" {...register("git_repo_name")} />
            <label className=" text-base">代码分支</label>
            <input type="text" {...register("branch")} />
            <div className="flex flex-row gap-x-24">
              <button
                className="btn flex-auto bg-blue-400"
                onClick={() => reset()}
              >
                清空
              </button>
              <button className="flex-auto">
                <label htmlFor="create" className="btn w-full">
                  提交
                </label>
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
}
