; ModuleID = 'autocfg_1fe7d2310feae5e1_1.dac00d5d96cb01e8-cgu.0'
source_filename = "autocfg_1fe7d2310feae5e1_1.dac00d5d96cb01e8-cgu.0"
target datalayout = "e-m:o-p270:32:32-p271:32:32-p272:64:64-i64:64-i128:128-n32:64-S128-Fn32"
target triple = "arm64-apple-macosx11.0.0"

; core::f64::<impl f64>::to_int_unchecked
; Function Attrs: inlinehint uwtable
define i32 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$16to_int_unchecked17hfe746ed2f093e11dE"(double %self) unnamed_addr #0 {
start:
; call <f64 as core::convert::num::FloatToInt<i32>>::to_int_unchecked
  %_0 = call i32 @"_ZN65_$LT$f64$u20$as$u20$core..convert..num..FloatToInt$LT$i32$GT$$GT$16to_int_unchecked17ha2b5d2e60a5682eeE"(double %self)
  ret i32 %_0
}

; <f64 as core::convert::num::FloatToInt<i32>>::to_int_unchecked
; Function Attrs: inlinehint uwtable
define internal i32 @"_ZN65_$LT$f64$u20$as$u20$core..convert..num..FloatToInt$LT$i32$GT$$GT$16to_int_unchecked17ha2b5d2e60a5682eeE"(double %self) unnamed_addr #0 {
start:
  %0 = alloca [4 x i8], align 4
  %1 = fptosi double %self to i32
  store i32 %1, ptr %0, align 4
  %_0 = load i32, ptr %0, align 4
  ret i32 %_0
}

; autocfg_1fe7d2310feae5e1_1::probe
; Function Attrs: uwtable
define void @_ZN26autocfg_1fe7d2310feae5e1_15probe17h85aa28f099d29059E() unnamed_addr #1 {
start:
; call core::f64::<impl f64>::to_int_unchecked
  %_1 = call i32 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$16to_int_unchecked17hfe746ed2f093e11dE"(double 1.000000e+00)
  ret void
}

attributes #0 = { inlinehint uwtable "frame-pointer"="non-leaf" "probe-stack"="inline-asm" "target-cpu"="apple-m1" }
attributes #1 = { uwtable "frame-pointer"="non-leaf" "probe-stack"="inline-asm" "target-cpu"="apple-m1" }

!llvm.module.flags = !{!0}
!llvm.ident = !{!1}

!0 = !{i32 8, !"PIC Level", i32 2}
!1 = !{!"rustc version 1.87.0 (17067e9ac 2025-05-09)"}
