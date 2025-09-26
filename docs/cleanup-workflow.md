# Next.js 项目快速清理指南

> 一条命令跑完整套检查：
pm run cleanup
>
> 脚本会依次执行 Knip（无用代码）→ ESLint → depcheck（依赖扫描，可选）。

## 1. 快速使用
`ash
npm install
npm run cleanup
`
- 所有检查通过即表示无明显的未用代码、未用导出及 lint 问题。
- depcheck 仅输出报告，不影响退出码；必要时按提示手动清理依赖。

## 2. 脚本详情
scripts/cleanup.mjs 的执行顺序：
1. 
px knip --strict：扫描未使用的文件/导出/依赖。
2. 
pm run lint -- --max-warnings=0：确保 ESLint 通过且无警告。
3. 
px depcheck（可选步骤）：列出潜在的未用/缺失依赖。

脚本默认在 Windows/macOS/Linux 下均可运行；CI 环境中也可直接执行。

## 3. GitHub Actions 守门
仓库内已存在 .github/workflows/knip.yml，在 push/PR 到 master 或 main 时自动运行 Knip。若发现无用代码将阻止合并。

## 4. 常见处理方式
| 场景 | 操作建议 |
| --- | --- |
| Knip 报告未用文件/导出 | 删除对应代码或确认后加入 knip.json 的 ignore |
| lint 失败 | 按提示修复语法/风格问题；必要时调整 ESLint 配置 |
| depcheck 标记依赖未使用 | 确认是否仅在配置/动态导入中使用；若确实无用，卸载并重新运行脚本 |
| Windows JSON 解析失败 | 以 UTF-8（无 BOM）重新保存 knip.json / package.json |

## 5. 扩展建议
- 在 	sconfig.json 中启用 
oUnusedLocals、
oUnusedParameters 等严格选项。
- 如需在提交前强制执行，可使用 Husky：
  `ash
  npx husky add .husky/pre-commit "npm run cleanup"
  `
- 若想跳过可选的 depcheck，可将脚本中的对应步骤 equired 属性设为 	rue/false。

通过 
pm run cleanup 即可快速完成一次全面的无用代码扫描与质量检查，适合日常开发和发布前自检。