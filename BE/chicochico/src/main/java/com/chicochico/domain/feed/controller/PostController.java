package com.chicochico.domain.feed.controller;


import com.chicochico.common.dto.ResultDto;
import com.chicochico.domain.feed.dto.PostRequestDto;
import com.chicochico.domain.feed.dto.PostResponseDto;
import com.chicochico.domain.feed.dto.PostSimpleResponseDto;
import com.chicochico.domain.feed.entity.PostEntity;
import com.chicochico.domain.feed.service.PostService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
@Api(tags = "게시글 관련 API")
public class PostController {

	private final PostService postService;


	@GetMapping(value = "/{nickname}")
	@ApiOperation(value = "게시글 목록을 조회합니다.", notes = "")
	public ResponseEntity<ResultDto<Page<PostSimpleResponseDto>>> getPostList(@PathVariable("nickname") String nickname, Pageable pageable) {
		Page<PostEntity> postPage = postService.getPostList(nickname, pageable);
		// entity page -> dto page 변경
		return ResponseEntity.ok().body(ResultDto.of(Page.empty()));
	}


	@GetMapping("/{postId}")
	@ApiOperation(value = "게시글 상세 내용을 조회합니다.")
	public ResponseEntity<ResultDto<PostResponseDto>> getPost(@PathVariable("postId") Long postId) {
		PostEntity post = postService.getPost(postId);
		PostResponseDto postResponseDto = PostResponseDto.fromEntity(post);
		return ResponseEntity.ok().body(ResultDto.of(postResponseDto));
	}


	@PostMapping
	@ApiOperation(value = "게시글을 생성합니다.")
	public ResponseEntity<ResultDto<Boolean>> createPost(@RequestPart PostRequestDto postRequestDto) {
		postService.createPost(postRequestDto);
		return ResponseEntity.ok().body(ResultDto.ofSuccess());
	}


	@PutMapping("/{postId}")
	@ApiOperation(value = "게시글을 수정합니다.")
	public ResponseEntity<ResultDto<Boolean>> modifyPost(@PathVariable("postId") Long postId, @RequestPart PostRequestDto postRequestDto) {
		postService.modifyPost(postId, postRequestDto);
		return ResponseEntity.ok().body(ResultDto.ofSuccess());
	}


	@DeleteMapping("/{postId}")
	@ApiOperation(value = "게시글을 삭제합니다.")
	public ResponseEntity<ResultDto<Boolean>> deletePost(@PathVariable("postId") Long postId) {
		postService.deletePost(postId);
		return ResponseEntity.ok().body(ResultDto.ofSuccess());
	}

}