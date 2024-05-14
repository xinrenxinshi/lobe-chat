export const useNewVersion = () => {
  // const [hasNewVersion, useCheckLatestVersion] = useGlobalStore((s) => [
  //   s.hasNewVersion,
  //   s.useCheckLatestVersion,
  // ]);
  //
  // useCheckLatestVersion();
  //
  // return hasNewVersion;
  //永久关闭更新检测
  return false;
};
