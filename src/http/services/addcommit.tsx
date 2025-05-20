import { fetcher } from "~/utils/helpers/fetch";
import { CommitFormData } from "~/lib/interfaces/types";

export const createCommitAPI = async (data: CommitFormData) => {
  const payload = {
    project: data.project,
    date: data.date ? data.date.toISOString() : undefined,
    lines: data.lines,
    commit: data.commit,
    commitName: data.commitname,
    name: data.name,
  };

  console.log("Final API Payload:", payload);

  return fetcher<any>("/commits", {
    method: "POST",
    body: payload,
  });
};