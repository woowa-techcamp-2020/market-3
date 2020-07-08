# 배민상회

[![Build Status](https://travis-ci.org/woowa-techcamp-2020/market-3.svg?branch=dev)](https://travis-ci.org/woowa-techcamp-2020/market-3)

# Development Guide

## 처음 PR 날릴 때

새로운 기능을 추가할 때 아래 규칙에 맞게 브랜치를 생성합니다.
브랜치를 생성할 때에는 `dev` 브랜치로부터 생성합니다.

- 기능을 추가하는 경우, `feature/[기능 이름]`
- 레이아웃을 추가하는 경우, `layout/[화면 이름]`

예를 들어 마이페이지 화면을 추가하는 경우, 아래와 같이 브랜치를 생성합니다.

```bash
$ git checkout -b layout/mypage develop
```

작업을 마친 뒤에는 staging area에 올리고, commit합니다.
commit 메세지 첫줄은 issue의 title과 같게 적고, 내용은 한글로 작성합니다.

```bash
$ git add mypage.html
$ git commit
```

커밋한 이후에 rebase한 뒤 push 해주세요

```bash
$ git fetch upstream
$ git rebase upstream/dev
$ git push origin layout/mypage
```

그 다음 [원본저장소](https://github.com/woowa-techcamp-2020/market-3) 으로 오셔서 Pull Request를 날려주세요.

## 코드리뷰 이후 코드를 수정했을 때

마찬가지로 수정한 파일들을 staging area에 올립니다.
커밋을 하나로 유지하기 위해 `commit --amend`를 사용합니다.
그 다음 force push 해줍니다.

```bash
$ git add mypage.html
$ git commit --amend
$ git push origin layout/mypage --force
```

그 다음 GitHub의 해당 Pull Request로 가시면 수정된 코드가 반영된 것을 확인할 수 있습니다.
